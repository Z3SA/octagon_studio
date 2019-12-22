import { shell } from 'electron';
import * as React from 'react';

import Modal from 'antd/lib/modal';

import appData from 'data/common/appData';
import { IOMSLDAddLangModal } from 'data/common/model/lang';

export const AddLanguageModal = (translates: IOMSLDAddLangModal): void => {
  Modal.info({
    title: translates.TITLE,
    content: (
      <ol>
        {Object.values(translates.STEPS).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    ),
    okText: translates.OPEN_LANG_FOLDER,
    width: 600,
    onOk: () => {
      shell.openItem(`${appData.folder}/${appData.langsFolder}`);
    },
  });
};
