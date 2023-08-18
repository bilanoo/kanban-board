import { create } from "zustand";
import { PaletteMode } from "@mui/material";
interface LightOrDarkModeStoreProps {
  mode: PaletteMode;
  setMode: (value: PaletteMode) => void;
}

const useLightOrDarkModeStore = create<LightOrDarkModeStoreProps>((set) => ({
  mode: "light",
  setMode: (value: PaletteMode) => set({ mode: value }),
}));

export default useLightOrDarkModeStore;

export const useCurrentMode = () =>
  useLightOrDarkModeStore((state) => state.mode);
