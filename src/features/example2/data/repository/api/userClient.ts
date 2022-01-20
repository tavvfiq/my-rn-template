import HttpTransport from '~core/services/transport/http/base';
import { UserI } from '../../domain/user';
import UserClientInterface from './userClientInterface';

class UserClientApi
  extends HttpTransport<UserI[]>
  implements UserClientInterface
{
  constructor() {
    super('https://jsonplaceholder.typicode.com/');
  }

  getUser() {
    return this.get('users/');
  }
}

export default UserClientApi;
