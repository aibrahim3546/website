import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import userService from '../../services/userService';
import type { INewUser, IUser } from './typings';

interface UsersState {
  users: Array<IUser>;
}

const initialState: UsersState = {
  users: [],
};

// API Call is made using createAsyncThunk
export const fetchUsers = createAsyncThunk(
  'counter/fetchUsers',
  async () => {
    const users = await userService.fetchUsers();
    return users;
  },
);

export const createNewUser = createAsyncThunk(
  'counter/createNewUser',
  async (user: INewUser) => {
    const newUser = await userService.createUser(user);
    return newUser;
  },
);

const usersSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Array<IUser>>) => {
      state.users = action.payload;
    });

    builder.addCase(fetchUsers.rejected, () => {
      // This code here will run if API call failed or return error
    });

    builder.addCase(createNewUser.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.users.unshift(action.payload);
    });
  },
});

export default usersSlice.reducer;
