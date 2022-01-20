import { UserI } from '../domain/user';

interface UserRepositoryInterface {
  getUser: () => Promise<UserI[]>;
}

export default UserRepositoryInterface;
