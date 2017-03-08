import ActionType from '../actionType';
import { StateUser } from '../initialState';

// reducer 其实也是个方法而已
// 参数是 state 和 action
// 返回值是新的 state
export default function ReducerCounter(state = StateUser, action) {
    switch (action.type) {
        case ActionType.USER_LOGIN:
            return Object.assign({}, state, {
                userName: action.payload
            });

        default:
            return state;
    }
}
