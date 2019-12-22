import React, { PureComponent } from 'react';

import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import message from 'antd/lib/message';
import Select from 'antd/lib/select';
import Tooltip from 'antd/lib/tooltip';

import OMSIcon, { EOmsIconIconName } from 'components/common/OMSIcon';

import { IOMSLDSettingsLanguage } from 'data/common/model/lang';
import { oms } from 'data/data.init';
import { OMSLanguage } from 'data/module/main';

import { TranslateContext } from 'modules/global/TranslateContext';

import { AddLanguageModal } from './AddLanguageModal';

interface ILanguageSelectProps {
  currentLanguage?: string;
  langList?: OMSLanguage[];
  setLangList?: (languages: OMSLanguage[]) => void;
}

export default class LanguageSelect extends PureComponent<ILanguageSelectProps> {
  static contextType = TranslateContext;

  lang: IOMSLDSettingsLanguage = this.context.SETTINGS.INTERFACE.LANGUAGE;

  showAddLanguageModal = () => {
    AddLanguageModal(this.lang.ADD_LANG_MODAL);
  }

  reloadLangList = (): void => {
    new Promise((resolve: (value: OMSLanguage[]) => void) => {
      resolve(oms.lang.reloadLangList());
    }).then(langList => {
      this.props.setLangList(langList);
      message.success('Список языков обновлён');
    });
  }

  render() {
    const { currentLanguage, langList } = this.props;

    const languageOptions = langList.map(lang => (
      <Select.Option value={lang.abbr} key={lang.abbr}>
        {lang.name} ({lang.abbr.toLocaleUpperCase()})
      </Select.Option>
    ));

    return (
      <React.Fragment>
        <Select defaultValue={currentLanguage}>{languageOptions}</Select>

        <Divider type="vertical" />

        <Button onClick={this.showAddLanguageModal}>{this.lang.ADD_LANG}</Button>

        <Tooltip title={this.lang.REFRESH_LANGS}>
          <Button onClick={this.reloadLangList}>
            <OMSIcon icon={EOmsIconIconName.sync} size={14} weight="light" />
          </Button>
        </Tooltip>
      </React.Fragment>
    );
  }
}
