import { flow, makeObservable, observable } from 'mobx';
import User, { UserI } from '../domain/user';
import UserRepositoryInterface from '../repository/userRepositoryInterface';

class UserViewModel {
  user: User[];
  loading: boolean;
  error: boolean;
  success: boolean;
  private _userRepo: UserRepositoryInterface;
  constructor(userRepo: UserRepositoryInterface) {
    this._userRepo = userRepo;
    makeObservable(this, {
      user: observable,
      loading: observable,
      error: observable,
      success: observable,
      getUser: flow,
    });
    this.user = [];
    this.loading = true;
    this.error = false;
    this.success = false;
  }

  *getUser() {
    this.loading = true;
    try {
      const user: UserI[] = yield this._userRepo.getUser();
      this.user = user.map(val => new User(val));
      this.success = true;
    } catch (e) {
      this.user = [];
      this.error = true;
    } finally {
      this.loading = false;
    }
  }
}

export default UserViewModel;
