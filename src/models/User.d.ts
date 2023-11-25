import { RoleEnum } from 'utils/enum';

type ProfileRecordType = UserRecordType & {
  isLoggedIn: boolean;
};

type UserRecordType = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  name?: string;
  role?: RoleEnum;
};

type UserPaginateType = PaginateType & {
  items: UserRecordType[];
};

type UserParams = PaginateParams;
