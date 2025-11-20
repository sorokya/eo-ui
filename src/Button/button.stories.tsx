import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A customizable button component with small and large variants.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Large: Story = {
  args: {
    children: 'Play Game',
    variant: 'large',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The large variant has a larger font and is decorated with screws. Suitable for primary actions.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    children: 'OK!',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The small variant (default) has a smaller font. Suitable for secondary actions.',
      },
    },
  },
};
