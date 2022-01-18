import { makeObservable, observable } from 'mobx';

interface ICounter {
  count: number;
}

class Counter implements ICounter {
  count: number;
  constructor() {
    makeObservable(this, {
      count: observable,
    });
    this.count = 0;
  }
}

export default Counter;
