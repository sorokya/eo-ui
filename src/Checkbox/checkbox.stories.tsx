import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ChangeEvent, useState } from 'react';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A simple checkbox component',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
    };
    return <Checkbox {...args} checked={checked} onChange={onChange} />;
  },
  args: {
    id: 'default-checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default checkbox, initially unchecked.',
      },
    },
  },
};
