import { createSlice } from "@reduxjs/toolkit";
import { register, logIn } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isAuthError:false,
  // isRefreshing:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
    },
    [register.rejected](state,) {
      state.isAuthError = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, ) {
      state.isAuthError = true;
    }
    // [logOut.fulfilled](state) {
    //   state.user = { name: null, email: null },
    //     state.token = null;
    //   state.isLoggedIn = false;
    // },
  },
});

export const authReducer = authSlice.reducer;
