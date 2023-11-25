import { UserPaginateType, UserParams } from 'models/User';
import { client } from './axios';

const fetchUsers = (params?: UserParams): Promise<UserPaginateType> => client.get(`/api/users`, { params });

const userService = {
  fetchUsers,
};

export default userService;
