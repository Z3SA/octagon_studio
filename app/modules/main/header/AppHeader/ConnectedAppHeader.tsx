import { connect } from 'react-redux';

import { toggleSettingsModal } from 'store/actions/main/modals';

import AppHeader from './AppHeader';

const mapDispatchToProps = dispatch => ({
  onClickSettingsButton: () => {
    dispatch(toggleSettingsModal(true));
  },
});

const ConnectedAppHeader = connect(null, mapDispatchToProps)(AppHeader);

export default ConnectedAppHeader;
