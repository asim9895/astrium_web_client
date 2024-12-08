import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ThemeState {
  theme: string;
}

// Define the initial state using that type
const initialState: ThemeState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle_theme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggle_theme } = themeSlice.actions;
export default themeSlice.reducer;
