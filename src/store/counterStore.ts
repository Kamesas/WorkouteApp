import { observable, action, decorate, computed } from "mobx";

export class CounterStore {
  value = 0;
  value2 = 1;

  incVal(num: number) {
    this.value += num;
  }

  decVal() {
    this.value2--;
  }

  get SumCount() {
    return this.value + this.value2;
  }
}
decorate(CounterStore, {
  value: observable,
  value2: observable,
  incVal: action.bound,
  decVal: action.bound,
  SumCount: computed
});

export default new CounterStore();
