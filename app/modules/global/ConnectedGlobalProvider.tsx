import { connect } from 'react-redux';

import { toggleSettingsModal } from 'store/actions/main/modals';
import GlobalProvider from './GlobalProvider';

const mapDispatchToProps = dispatch => ({
  openSettings: () => {
    dispatch(toggleSettingsModal(true));
  },
});

const ConnectedGlobalProvider = connect(
  null,
  mapDispatchToProps
)(GlobalProvider);
export default ConnectedGlobalProvider;
