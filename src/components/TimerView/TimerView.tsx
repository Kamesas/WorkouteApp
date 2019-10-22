import * as React from 'react';
import {inject, observer} from 'mobx-react';
import Timer from '../../store/timerStore';

// @inject('timer')@observer
// class TimerView extends React.Component<any> {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.onReset}>
//                     Seconds passed: {this.props.timer}
//                 </button>
//                 <DevTools />
//             </div>
//         );
//      }
//
//      onReset = () => {
//          this.props.appState.resetTimer();
//      }
// };
//
// TimerView.defaultProps = {
//   timer: Timer,
// };
//
// export default TimerView;

