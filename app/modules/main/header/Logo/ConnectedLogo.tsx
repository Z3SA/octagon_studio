import { connect } from 'react-redux';
import { toggleAboutAppModal } from 'store/actions/main/modals';
import Logo from './Logo';
import { IStore } from 'store/model/store.interface';

const mapStateToProps = (state: IStore) => ({
  aboutAppModalVisible: state.main.modals.aboutAppVisible,
});

const mapDispatchToProps = dispatch => ({
  onClickAboutApp: () => {
    dispatch(toggleAboutAppModal(true));
  },
});

const ConnectedLogo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Logo);

export default ConnectedLogo;
