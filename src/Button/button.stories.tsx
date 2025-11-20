import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Large: Story = {
  args: {
    label: 'Play Game',
    variant: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'OK!',
    variant: 'small',
  },
};
