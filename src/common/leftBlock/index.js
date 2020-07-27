import React from 'react';

import { LeftBlockContainer } from '../styledComponents';
import Sidebar from '../sidebar/Sidebar';
import ModalChat from '../modal-chat';

const LeftBlock = () => (
  <LeftBlockContainer>
    <Sidebar />
    <ModalChat />
  </LeftBlockContainer>
);

export default LeftBlock;
