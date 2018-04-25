import Settings from './index';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        winVisible: state.appMain.settingsWinVisible
    };
}

export default connect(mapStateToProps)(Settings);