'use strict';
import keyMirror from 'keymirror';

const ActionType = keyMirror({
    COUNTER_INCREMENT: null,
    COUNTER_DECREMENT: null,
});

export default ActionType;