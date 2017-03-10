import ActionType from '../actionType';
import { StateCounter } from '../initialState';

// reducer 其实也是个方法而已
// 参数是 state 和 action
// 返回值是新的 state
export default function ReducerCounter(state = StateCounter, action) {
    switch (action.type) {
        case ActionType.COUNTER_INCREMENT:
            return Object.assign({}, state, {
                data: state.data + state.add
            });

        case ActionType.COUNTER_DECREMENT:
            return Object.assign({}, state, {
                data: state.data - state.add
            });

        default:
            return state;
    }
}
