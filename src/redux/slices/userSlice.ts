import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  authenticated: boolean;
}

const initialState: UserState = {
  user: null,
  authenticated: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set_user: (state, action) => {
      state.user = action.payload;
    },
    clear_user: (state) => {
      state.user = null;
    },
    authenticate_user: (state) => {
      state.authenticated = true;
    },
    logout_user: (state) => {
      state.authenticated = false;
    },
  },
});
export const { set_user, clear_user, authenticate_user, logout_user } =
  userSlice.actions;
export default userSlice.reducer;
