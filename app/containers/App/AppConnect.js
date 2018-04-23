import App from './index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSettings } from '../../actions/app';

function mapStateToProps(state) {
    return {
        settingsVisible: state.settingsWinDisable
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(toggleSettings, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);