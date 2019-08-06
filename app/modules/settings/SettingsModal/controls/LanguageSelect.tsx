import React, { PureComponent } from 'react';

import Select from 'antd/lib/select';

import { OMSLanguage } from 'data/module/main';

interface ILanguageSelectProps {
  currentLanguage: string;
  langList: OMSLanguage[];
}

export default class LanguageSelect extends PureComponent<ILanguageSelectProps> {
  render() {
    const { currentLanguage } = this.props;

    // const languageOptions = langList.map(lang => (
    //   <Select.Option value={lang.abbr} key={lang.abbr}>
    //     {lang.name} ({lang.abbr.toLocaleUpperCase()})
    //   </Select.Option>
    // ));

    return <Select defaultValue={currentLanguage} />;
  }
}
