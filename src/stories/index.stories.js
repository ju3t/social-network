import React from 'react';
import { МодальныйЧат } from './modal-chat/index.stories';
import { ButtonTF } from './buttons/index.stories';

export default { title: 'Button' };

export const withText = () => <ButtonTF>Hello Button</ButtonTF>;

export const withEmoji = () => (
  <ButtonTF type="button">
    <span role="img" aria-label="smile">
      😀
    </span>
  </ButtonTF>
);

export const ModalChat = () => <МодальныйЧат />;
export const ButtonSmall = () => (
  <ButtonTF type="button" small>
    ButtonLabel
  </ButtonTF>
);
export const Button = () => <ButtonTF type="button">ButtonLabel</ButtonTF>;
