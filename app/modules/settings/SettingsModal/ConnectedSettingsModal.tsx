import { connect } from 'react-redux';

import { IStore } from 'store/model/store.interface';
import { toggleSettingsModal } from 'store/actions/main/modals';
import SettingsModal from './SettingsModal';
import { setLangList } from 'store/actions/app/ui';
import { OMSLanguage } from 'data/module/main';

const mapStateToProps = (state: IStore) => ({
  visible: state.main.modals.settingsVisible,
  langList: state.app.ui.langList,
  currentLanguage: state.app.ui.language,
});

const mapDispatchToProps = dispatch => ({
  onCloseModal: () => {
    dispatch(toggleSettingsModal(false));
  },
  setLangList: (langList: OMSLanguage[]) => {
    dispatch(setLangList(langList));
  },
});

const ConnectedSettingsModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsModal);
export default ConnectedSettingsModal;
