import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as AppActions from 'store/actions/app';
import App from './index';

function mapStateToProps(state) {
  return {
    settingsVisible: state.appMain.settingsWinVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
