import React from 'react';
import { Button } from '@storybook/react/demo';
import Friends from '../pages/Friends';

export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const FriendsPage = () => <Friends />;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
