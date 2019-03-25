import { connect } from 'react-redux';
import Settings from './index';

function mapStateToProps(state) {
  return {
    winVisible: state.appMain.settingsWinVisible,
  };
}

export default connect(mapStateToProps)(Settings);
