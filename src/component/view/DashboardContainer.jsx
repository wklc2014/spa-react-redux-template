'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from './Dashboard.jsx';

function mapStateToProps(state) {
    return {
        counter: state.counter.data
    }
}

// 将 action 的所有方法绑定到 props 上
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionChangeCounterAdd
    }, dispatch);
}

const DashboardContainer = connect(
    mapStateToProps
)(Dashboard);

export default DashboardContainer;
