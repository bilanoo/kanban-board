import { create } from "zustand";
interface SubTasks {
  isCompleted: boolean;
  title: string;
}

export interface Tasks {
  description: string;
  status: string;
  subtasks: SubTasks[];
  title: string;
}
export interface Columns {
  name: string;
  tasks: Tasks[];
}

interface SelectedBoardContent {
  columns: Columns[];
  name: string;
}

interface BoardContentActions {
  setSelectedBoard: (selectedBoard: string) => void;
  setSelectedBoardContent: (selectedBoard: SelectedBoardContent) => void;
  updateSelectedBoardContentOnDragEnd: (result: any) => void;
}
interface BoardContentStore {
  selectedBoard: string;
  selectedBoardContent: SelectedBoardContent;
  actions: BoardContentActions;
}

const useBoardContentStore = create<BoardContentStore>((set) => ({
  selectedBoard: "Platform Launch",
  selectedBoardContent: { columns: [], name: "" },
  actions: {
    setSelectedBoard: (boardSelected: string) =>
      set({ selectedBoard: boardSelected }),
    setSelectedBoardContent: (boardContent: SelectedBoardContent) =>
      set({ selectedBoardContent: boardContent }),
    updateSelectedBoardContentOnDragEnd: (result: any) =>
      set((state) => {
        if (!result.destination) {
          return {};
        }

        const removeFromList = (
          list: Tasks[],
          index: number
        ): [Tasks, Tasks[]] => {
          const result = Array.from(list);
          const [removed] = result.splice(index, 1);

          return [removed, result];
        };

        const addToList = (list: Tasks[], index: number, element: Tasks) => {
          const result = Array.from(list);
          result.splice(index, 0, element);
          return result;
        };
        const copyofList: Columns[] = [...state.selectedBoardContent.columns];
        const sourceList: Columns[] = copyofList.filter(
          (eachColumn) => eachColumn.name === result.source.droppableId
        );
        // Find the object with the matching name
        const matchingObjectIndex: number = copyofList.findIndex(
          (obj) => obj.name === result.source.droppableId
        );

        const [removedElement, newSourceList] = removeFromList(
          sourceList[0].tasks,
          result.source.index
        );
        // Create a new object with updated tasks array
        const updatedObject: Columns = {
          ...copyofList[matchingObjectIndex],
          tasks: newSourceList,
        };
        // Update the original array with the updated object
        copyofList[matchingObjectIndex] = updatedObject;

        const destinationList: Columns[] = copyofList.filter(
          (eachColumn) => eachColumn.name === result.destination.droppableId
        );

        const matchingDestinationObjectIndex: number = copyofList.findIndex(
          (obj) => obj.name === result.destination.droppableId
        );
        const updatedDestinationObject: Columns = {
          ...destinationList[0], // Maintain other properties
          tasks: addToList(
            destinationList[0].tasks,
            result.destination.index,
            removedElement
          ),
        };

        copyofList[matchingDestinationObjectIndex] = updatedDestinationObject;
        return {
          selectedBoardContent: {
            ...state.selectedBoardContent,
            columns: copyofList,
          },
        };
      }),
  },
}));

export default useBoardContentStore;

export const useSelectedBoard = () =>
  useBoardContentStore((state) => state.selectedBoard);

export const useSelectedBoardContent = () =>
  useBoardContentStore((state) => state.selectedBoardContent);
