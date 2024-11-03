import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { supabase } from "../../supabase/supabase";

type ErrorMessage = {
  message: string;
};

export type User = {
  id: number;
  name: string;
  family: string;
  email: string;
};

type UsersStateType = {
  users: null | User[];
  errorMessage: undefined | string;
  loading: boolean;
};

export const getUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string | undefined }
>("users/getUsers", async (_, { rejectWithValue }) => {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (data) {
      return data;
    }

    throw new Error(error.message);
  } catch (err) {
    const error = (err as ErrorMessage).message;
    return rejectWithValue(error);
  }
});

export const updateUser = createAsyncThunk<User[], User>(
  "users/updateUser",
  async (user) => {
    const { data, error } = await supabase
      .from("users")
      .update(user)
      .eq("id", user.id)
      .select();

    return data as User[];
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: number) => {
    const { data } = await supabase.from("users").delete().eq("id", id);

    return id;
  }
);

export const addNewUser = createAsyncThunk(
  "users/addNewUser",
  async (newUser: Omit<User, "id">) => {
    const { data } = await supabase.from("users").insert(newUser).select();

    if (data) {
      return data[0];
    }
  }
);

const initialState: UsersStateType = {
  users: null,
  errorMessage: undefined,
  loading: true,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.errorMessage = action.payload;
      state.loading = false;
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      const updatedUser = action.payload[0];
      state.users = state.users?.map((item) =>
        item.id === updatedUser.id ? updatedUser : item
      ) as User[];
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users?.filter(
        (item) => item.id !== action.payload
      ) as User[];
    });

    builder.addCase(
      addNewUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.users?.push(action.payload);
      }
    );
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
