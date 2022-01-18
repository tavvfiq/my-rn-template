import { action, makeObservable, observable } from 'mobx';
import Counter from '../model/counter';

export interface ICounterStore {
  getCounter: () => number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
}

class CounterStore implements ICounterStore {
  private counter: Counter;

  constructor() {
    makeObservable<CounterStore, 'counter'>(this, {
      counter: observable,
      increment: action,
      decrement: action,
    });
    this.counter = new Counter();
  }

  getCounter(): number {
    return this.counter.count;
  }

  increment(value: number = 1) {
    this.counter.count += value;
  }

  decrement(value: number = 1) {
    this.counter.count -= value;
  }
}

const CounterStoreSingleton = new CounterStore();

export default CounterStoreSingleton;
