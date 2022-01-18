import { ICounterStore } from '../data/store/counterStore';

class CounterViewModel {
  private counterStore: ICounterStore;
  constructor(counterStore: ICounterStore) {
    this.counterStore = counterStore;
  }

  getCounter() {
    return this.counterStore.getCounter();
  }

  increment(value: number) {
    this.counterStore.increment(value);
  }

  decrement(value: number) {
    this.counterStore.decrement(value);
  }
}

export default CounterViewModel;
