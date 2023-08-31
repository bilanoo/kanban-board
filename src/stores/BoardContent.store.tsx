import { create } from "zustand";
import kanbanData from "../data.json";
import { DropResult } from "react-beautiful-dnd";
import { selectedTaskContentProps } from "../BoardColumns/Column/Column";
export interface SubTasks {
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

export interface SelectedBoardContent {
  columns: Columns[];
  name: string;
}

interface KanbanDataProps {
  boards: SelectedBoardContent[];
}
interface BoardContentActions {
  setSelectedBoard: (selectedBoard: string) => void;
  setSelectedBoardContent: (selectedBoard: SelectedBoardContent) => void;
  updateSelectedBoardContentOnDragEnd: (result: DropResult) => void;
  setKanbanData: (updatedData: KanbanDataProps) => void;
  updateKanbanDataAfterMovingTask: () => void;
  updateSelectedBoardContentOnClose: (
    selectedTaskContent: selectedTaskContentProps
  ) => void;
  deleteTaskFromCurrentColumn: (
    taskIndexPosition: number,
    columnName: string
  ) => void;
  removeColumnFromKanbanData: () => void;
  changeSelectedBoardAfterRemovingColumn: (
    kanbanDataBeforeColumnBeingRemoved: KanbanDataProps
  ) => void;
  addTaskToColumn: (taskToAdd: selectedTaskContentProps) => void;
  addBoardToKanbanData: (newBoardContent: SelectedBoardContent) => void;
}

interface BoardContentStore {
  selectedBoard: string;
  selectedBoardContent: SelectedBoardContent;
  kanbanData: KanbanDataProps;
  actions: BoardContentActions;
}

const useBoardContentStore = create<BoardContentStore>((set) => ({
  selectedBoard: "Platform Launch",
  selectedBoardContent: { columns: [], name: "" },
  kanbanData: kanbanData,
  actions: {
    setSelectedBoard: (boardSelected: string) =>
      set({ selectedBoard: boardSelected }),
    setSelectedBoardContent: (boardContent: SelectedBoardContent) =>
      set({ selectedBoardContent: boardContent }),
    updateSelectedBoardContentOnDragEnd: (result: DropResult) =>
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
          const modifiedTasks = Array.from(list);
          modifiedTasks.splice(index, 0, element);

          modifiedTasks[index].status = result.destination!.droppableId;

          return modifiedTasks;
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
          (eachColumn) => eachColumn.name === result?.destination?.droppableId
        );

        const matchingDestinationObjectIndex: number = copyofList.findIndex(
          (obj) => obj.name === result?.destination?.droppableId
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
    updateKanbanDataAfterMovingTask: () =>
      set((state) => {
        const indexPositionOfUpdatedBoard = state.kanbanData.boards.findIndex(
          (eachBoard) => eachBoard.name === state.selectedBoard
        );

        const updatedBoards = { ...state.kanbanData };

        updatedBoards.boards[indexPositionOfUpdatedBoard] =
          state.selectedBoardContent;

        return { kanbanData: updatedBoards };
      }),
    setKanbanData: (updatedData: KanbanDataProps) =>
      set(() => ({
        kanbanData: updatedData,
      })),
    updateSelectedBoardContentOnClose: (
      selectedTaskContent: selectedTaskContentProps
    ) =>
      set((state) => {
        const updatedTask: Tasks = {
          description: selectedTaskContent.description,
          status: selectedTaskContent.status,
          subtasks: selectedTaskContent.subtasks,
          title: selectedTaskContent.title,
        };

        const modifiedColumn = state.selectedBoardContent.columns.filter(
          (eachColumn) => eachColumn.name === selectedTaskContent.columnName
        );

        const removeTask = () => {
          modifiedColumn[0].tasks.splice(selectedTaskContent.taskIndex, 1);
          return modifiedColumn[0];
        };

        const addTaskToColumn = () => {
          const modifiedColumn = state.selectedBoardContent.columns.filter(
            (eachColumn) => eachColumn.name === selectedTaskContent.status
          );
          modifiedColumn[0].tasks.push(updatedTask);
          return modifiedColumn[0];
        };

        const updatedSelectedBoard = { ...state.selectedBoardContent };

        const target = modifiedColumn[0].tasks[selectedTaskContent.taskIndex];

        Object.assign(target, updatedTask);

        // only move the task to another column if the user changed its status
        if (selectedTaskContent.columnName !== selectedTaskContent.status) {
          const indexColumnWithTaskToRemove =
            updatedSelectedBoard.columns.findIndex(
              (eachColumn) => eachColumn.name === selectedTaskContent.columnName
            );
          const indexColumnWithTaskToAdd =
            updatedSelectedBoard.columns.findIndex(
              (eachColumn) => eachColumn.name === selectedTaskContent.status
            );
          updatedSelectedBoard.columns[indexColumnWithTaskToRemove] =
            removeTask();

          updatedSelectedBoard.columns[indexColumnWithTaskToAdd] =
            addTaskToColumn();
        }

        return { selectedBoardContent: updatedSelectedBoard };
      }),
    deleteTaskFromCurrentColumn: (
      taskIndexPosition: number,
      columnName: string
    ) =>
      set((state) => {
        const updatedBoard = { ...state.selectedBoardContent };

        const columnWithTaskToDelete = updatedBoard.columns.filter(
          (eachBoard) => eachBoard.name === columnName
        );

        const indexPositionOfModifiedColumn = updatedBoard.columns.findIndex(
          (EachBoard) => EachBoard.name === columnName
        );

        columnWithTaskToDelete[0].tasks.splice(taskIndexPosition, 1);

        updatedBoard.columns[indexPositionOfModifiedColumn] =
          columnWithTaskToDelete[0];

        return { selectedBoardContent: updatedBoard };
      }),
    removeColumnFromKanbanData: () =>
      set((state) => {
        const updatedKanbanData = { ...state.kanbanData };

        const indexPositionOfColumnToRemove =
          updatedKanbanData.boards.findIndex(
            (eachColumn) => eachColumn.name === state.selectedBoard
          );
        state.actions.changeSelectedBoardAfterRemovingColumn(updatedKanbanData);
        updatedKanbanData.boards.splice(indexPositionOfColumnToRemove, 1);

        return {
          kanbanData: updatedKanbanData,
        };
      }),
    changeSelectedBoardAfterRemovingColumn: (
      kanbanDataBeforeColumnBeingRemoved: KanbanDataProps
    ) =>
      set((state) => {
        const columnIndex = kanbanDataBeforeColumnBeingRemoved.boards.findIndex(
          (EachBoard) => EachBoard.name === state.selectedBoard
        );

        let newSelectedBoardName = "";

        if (columnIndex !== -1) {
          if (
            columnIndex <
            kanbanDataBeforeColumnBeingRemoved.boards.length - 1
          ) {
            // If there's a column following, select its name
            newSelectedBoardName =
              kanbanDataBeforeColumnBeingRemoved.boards[columnIndex + 1].name;
          } else if (columnIndex > 0) {
            // If the removed column was the last one, select the previous column's name
            newSelectedBoardName =
              kanbanDataBeforeColumnBeingRemoved.boards[columnIndex - 1].name;
          } else {
            // If the removed column was the only one, select the first column's name
            newSelectedBoardName = "No boards available";
          }
        }

        return {
          selectedBoard: newSelectedBoardName,
        };
      }),
    addTaskToColumn: (taskToAdd: selectedTaskContentProps) =>
      set((state) => {
        const updatedTask: Tasks = {
          description: taskToAdd.description,
          status: taskToAdd.status,
          subtasks: taskToAdd.subtasks,
          title: taskToAdd.title,
        };

        const modifiedColumn = state.selectedBoardContent.columns.filter(
          (eachColumn) => eachColumn.name === updatedTask.status
        );

        modifiedColumn[0].tasks.push(updatedTask);

        const updatedSelectedBoard = { ...state.selectedBoardContent };

        const indexColumnWithTaskToAdd = updatedSelectedBoard.columns.findIndex(
          (eachColumn) => eachColumn.name === updatedTask.status
        );

        updatedSelectedBoard.columns[indexColumnWithTaskToAdd] =
          modifiedColumn[0];

        return { selectedBoardContent: updatedSelectedBoard };
      }),
    addBoardToKanbanData: (newBoardContent: SelectedBoardContent) =>
      set((state) => {
        const updatedKanbanData = { ...state.kanbanData };

        updatedKanbanData.boards.push(newBoardContent);

        state.actions.setSelectedBoard(newBoardContent.name);

        return { kanbanData: updatedKanbanData };
      }),
  },
}));

export default useBoardContentStore;

export const useSelectedBoard = () =>
  useBoardContentStore((state) => state.selectedBoard);

export const useSelectedBoardContent = () =>
  useBoardContentStore((state) => state.selectedBoardContent);

export const useKanbanData = () =>
  useBoardContentStore((state) => state.kanbanData);
