import { connect } from 'react-redux';

import { toggleAboutAppModal } from 'store/actions/main/modals';
import { IStore } from 'store/model/store.interface';

import AboutAppModal from './AboutAppModal';

const mapStateToProps = (state: IStore) => ({
  visible: state.main.modals.aboutAppVisible,
});

const mapDispatchToProps = dispatch => ({
  onCloseModal: () => {
    dispatch(toggleAboutAppModal(false));
  },
});

const ConnectedAboutAppModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutAppModal);

export default ConnectedAboutAppModal;
