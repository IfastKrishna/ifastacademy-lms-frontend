import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.loggedInUser;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },

    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
