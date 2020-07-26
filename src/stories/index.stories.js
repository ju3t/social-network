import React from 'react';
import { Button } from '@storybook/react/demo';
import { МодальныйЧат } from './modal-chat/index.stories';

export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const ModalChat = () => <МодальныйЧат />;
