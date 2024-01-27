import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../config/axiosConfig";

export const register = createAsyncThunk(
  "user/register",
  async (data, { rejecWithValue }) => {
    try {
      const res = await Axios.post("/api/users/register", data);
      return res.data;
    } catch (error) {
      return rejecWithValue(error.res.data);
    }
  }
);
export const login = createAsyncThunk(
  "user/login",
  async (data, { rejecWithValue }) => {
    try {
      const res = await Axios.post("/api/users/login", data);
      if (!res.data.success) {
        alert(res.data.msg);
        return rejecWithValue(res.data.msg);
      }
      localStorage.setItem("session_token", res.data.token);
      return res.data;
    } catch (error) {
      return rejecWithValue(error.res.data);
    }
  }
);
export const checkLogged = createAsyncThunk(
  "user/logged",
  async (_, { rejecWithValue }) => {
    console.log(localStorage.getItem("session_token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("session_token")}`,
      },
    };
    try {
      const { data } = await Axios.get("/api/users/checkLogged", config);
      return data;
    } catch (error) {
      localStorage.removeItem("authToken");
      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  role: "",
  data: {},
  isLoading: true,
  isLogin: false,
  loggedUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeRole: (state, action) => {
      state.role = action.payload;
    },
    reset: () => initialState,
  },
  extraReducers: (build) => {
    build.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.role = action.payload.userRole;
    });

    build.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.error;
    });
    build.addCase(checkLogged.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loggedUser = action.payload;
      state.isLogin = true;
    });

    build.addCase(checkLogged.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(checkLogged.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.error;
    });
  },
});
export function SettingUser(user) {
  localStorage.setItem("user", user);
}
// Action creators are generated for each case reducer function
export const { changeRole, reset } = userSlice.actions;
export const Selector = (state) => state.user.role;
export const UserInfo = (state) => state.user;

export default userSlice.reducer;
