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

        const removeFromList = (list: Tasks[], index) => {
          const result = Array.from(list);
          const [removed] = result.splice(index, 1);

          console.log("Result function: ", [removed], result);
          return [removed, result];
        };

        const addToList = ({ list, index, element }: any) => {
          const result = Array.from(list);
          result.splice(index, 0, element);
          return result;
        };
        const copyofList = [...state.selectedBoardContent.columns];
        let sourceList = copyofList.filter(
          (eachColumn) => eachColumn.name === result.source.droppableId
        );

        console.log(result.source.droppableId, result.source.index, copyofList);
        const [removedElement, newSourceList] = removeFromList(
          sourceList[0].tasks,
          result.source.index
        );

        copyofList[result.source.index] = {
          ...copyofList[result.source.index],
          tasks: newSourceList,
        };
        console.log(
          "new source list: ",
          newSourceList,
          "copy of list: ",
          copyofList
        );

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
