import { connect } from 'react-redux';
import { IStore } from 'store/model/store.interface';
import AboutAppModal from './AboutAppModal';

const mapStateToProps = (state: IStore) => ({
  visible: state.main.modals.aboutAppVisible,
});

const ConnectedAboutAppModal = connect(mapStateToProps)(AboutAppModal);

export default ConnectedAboutAppModal;
