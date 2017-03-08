import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from './User.jsx';

import {
    ActionLogin,
    ActionLogout
} from '../../redux/action/ActionUser.js';

function mapStateToProps(state) {
    return {
        userName: state.user.userName
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionLogin,
        ActionLogout
    }, dispatch);
}

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

export default UserContainer;
