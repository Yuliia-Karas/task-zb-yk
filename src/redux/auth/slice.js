import { createSlice } from "@reduxjs/toolkit";
import { register, logIn } from "./operations";
import Cookies from "js-cookie";

const initialState = {
  user: { name: null, email: null },
  token: Cookies.get("token"),
  isAuthError:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthError = false;
    },
    [register.rejected](state,) {
      state.isAuthError = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [logIn.rejected](state, ) {
      state.isAuthError = true;
    }
  },
});

export const authReducer = authSlice.reducer;
