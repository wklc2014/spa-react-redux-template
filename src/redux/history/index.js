import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './index.js';

const history = syncHistoryWithStore(hashHistory, store);

export default history;
