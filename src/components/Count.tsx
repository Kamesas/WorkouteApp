import React, {Component} from 'react';
import {observable, decorate, action, computed, extendObservable, configure} from 'mobx';
import {observer} from 'mobx-react';
import Count2 from "./Count2";
import NickName from "./NickName";

configure({enforceActions: "observed"});

const nickName: any = observable({
    firstName: 'Alex',
    age: 31,
    inc() {this.age++; },
    dec() {this.age--; },
    get nickname() {return this.firstName + this.age },
  }, {
  inc: action('Plus one'),
  dec: action
});

// const todos = observable([
//   {text: 'learn React'},
//   {text: 'Learn Gatsby'}
// ]);

/*Counter 2*/
const counterState: any = observable({
  count: 10,
});
counterState.inc = function () {
  this.count++;
};
counterState.dec = function () {
  this.count--;
};

/* End Counter 2*/
@observer
class Count extends Component {
  @observable count = 0;

  inc = () => this.count++;
  dec = () => this.count--;

  render() {
    return (
      <div>
        <h3>{this.count}</h3>
        <button onClick={this.inc}>+1</button>
        <button onClick={this.dec}>-1</button>

        <hr/>
        <Count2 store={counterState}/>
        <hr/>
        <NickName nickName={nickName}/>
      </div>
    );
  }
}

export default Count;
