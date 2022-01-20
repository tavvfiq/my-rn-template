import { AxiosResponse } from 'axios';
import { UserI } from '../../domain/user';

interface UserClientInterface {
  getUser: () => Promise<AxiosResponse<UserI[]>>;
}

export default UserClientInterface;
