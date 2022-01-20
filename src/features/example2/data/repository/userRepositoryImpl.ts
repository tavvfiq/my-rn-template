import UserClientInterface from './api/userClientInterface';
import UserRepositoryInterface from './userRepositoryInterface';

class UserRepository implements UserRepositoryInterface {
  _transport: UserClientInterface;
  constructor(transport: UserClientInterface) {
    this._transport = transport;
  }
  async getUser() {
    try {
      const res = await this._transport.getUser();
      return res;
    } catch (err) {
      throw err;
    }
  }
}

export default UserRepository;
