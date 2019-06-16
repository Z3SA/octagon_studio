import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { toggleSettingsModal } from 'store/actions/main/modals';
import GlobalProvider from './GlobalProvider';

const mapDispatchToProps = dispatch => ({
  openSettings: () => {
    dispatch(toggleSettingsModal(true));
  },
});

const ConnectedGlobalProvider = withRouter(
  connect(
    null,
    mapDispatchToProps
  )(GlobalProvider)
);
export default ConnectedGlobalProvider;
