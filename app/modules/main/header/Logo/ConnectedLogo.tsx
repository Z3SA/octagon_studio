import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { toggleAboutAppModal, toggleHotkeysModal } from 'store/actions/main/modals';
import Logo from './Logo';

const mapDispatchToProps = dispatch => ({
  onClickAboutApp: () => {
    dispatch(toggleAboutAppModal(true));
  },

  onClickHotkeys: () => {
    dispatch(toggleHotkeysModal(true));
  },

  onClickPlayground: () => {
    console.log('key');
    dispatch(push('playground'));
  },
});

const ConnectedLogo = connect(
  null,
  mapDispatchToProps
)(Logo);

export default ConnectedLogo;
