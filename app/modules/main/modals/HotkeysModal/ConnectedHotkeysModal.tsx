import { connect } from 'react-redux';

import { toggleHotkeysModal } from 'store/actions/main/modals';
import { IStore } from 'store/model/store.interface';

import HotkeysModal from './HotkeysModal';

const mapStateToProps = (state: IStore) => ({
  visible: state.main.modals.hotkeysVisible,
});

const mapDispatchToProps = dispatch => ({
  onCloseModal: () => {
    dispatch(toggleHotkeysModal(false));
  },
});

const ConnectedHotkeysModal = connect(mapStateToProps, mapDispatchToProps)(HotkeysModal);

export default ConnectedHotkeysModal;
