import axios from 'axios';
import type { INewUser, IUser } from '../store/users/typings';

const userInstance = axios.create({
  baseURL: 'https://606d26a8603ded0017503189.mockapi.io/api/v1/',
  timeout: 5000,
});

const fetchUsers = async (): Promise<Array<IUser>> => {
  try {
    const res = await userInstance.get('/users');
    return await Promise.resolve(res.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

const createUser = async (user: INewUser): Promise<IUser> => {
  try {
    const res = await userInstance.post('/users', user);
    return await Promise.resolve(res.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

const userService = {
  fetchUsers,
  createUser,
};

export default userService;
