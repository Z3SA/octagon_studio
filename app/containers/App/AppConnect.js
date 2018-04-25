import App from './index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from '../../actions/app';

function mapStateToProps(state) {
    return {
        settingsVisible: state.appMain.settingsWinVisible
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);