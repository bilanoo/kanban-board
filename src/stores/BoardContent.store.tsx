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
  },
}));

export default useBoardContentStore;

export const useSelectedBoard = () =>
  useBoardContentStore((state) => state.selectedBoard);

export const useSelectedBoardContent = () =>
  useBoardContentStore((state) => state.selectedBoardContent);
