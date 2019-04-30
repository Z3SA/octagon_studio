import { connect } from 'react-redux';
import { toggleAboutAppModal } from 'store/actions/main/modals';
import Logo from './Logo';

const mapDispatchToProps = dispatch => ({
  onClickAboutApp: () => {
    dispatch(toggleAboutAppModal(true));
  },
});

const ConnectedLogo = connect(
  null,
  mapDispatchToProps
)(Logo);

export default ConnectedLogo;
