import React from 'react';
import Modal from 'antd/lib/modal';

import { oms } from 'data/data.init';

const AboutAppModal = () => {
  Modal.info({
    title: 'О приложении',
    content: (
      <React.Fragment>
        <p>
          Octagon Modmaking Studio
          <br />
          Мажор-версия: {oms.major}
          <br />
          Номер и тип сборки: {oms.version}
          <br />
          ID экземпляра: {oms.user.appKey}
          <br />
          Имя пользователя: {oms.user.user}
        </p>
        <textarea style={{ display: 'none' }} />
      </React.Fragment>
    ),
    cancelText: 'Закрыть',
    okText: 'Информация',
  });
};

export default AboutAppModal;
