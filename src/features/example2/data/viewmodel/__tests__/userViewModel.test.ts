import { UserI } from '../../domain/user';
import UserRepositoryInterface from '../../repository/userRepositoryInterface';
import UserViewModel from '../userViewModel';

describe('testing userViewModel', () => {
  let vm: UserViewModel;
  beforeEach(() => {
    const repo: UserRepositoryInterface = {
      getUser: () => new Promise<UserI[]>((resolve, reject) => {
        reject(new Error('this is error'))
      })
    }
    vm = new UserViewModel(repo);
  });
  
  it('return empty array', async () => {
    await vm.getUser();
    expect(vm.error).toEqual(true);
  })
})