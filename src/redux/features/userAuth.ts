import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserAuthType = {
  isLogin: boolean;
  token: string | undefined;
  userInfo: {
    email: string | undefined;
    userName: string;
    role: "ADMIN" | "USER" | undefined;
  };
};

const initialState: UserAuthType = {
  token: "",
  isLogin: false,
  userInfo: {
    userName: "",
    email: "",
    role: undefined,
  },
};

const userAuth = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Omit<UserAuthType, "isLogin">>) => {
      const { payload } = action;
      state.isLogin = true;
      state.token = payload.token;
      state.userInfo = payload.userInfo;
    },

    logout: (state) => {
      const tokenKey = "sb-rcblhlbianzyscsggyqc-auth-token";
      localStorage.removeItem(tokenKey);
      state.isLogin = false;
      state.token = "";
      state.userInfo = {
        email: "",
        role: undefined,
        userName: "",
      };
    },
  },
});

export const { logout, login } = userAuth.actions;
export default userAuth.reducer;
