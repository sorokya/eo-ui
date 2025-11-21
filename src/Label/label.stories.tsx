import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { TextBox } from '../TextBox/text-box';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A label component with customizable text, htmlFor attribute, and padding.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Username:',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default label with no additional props.',
      },
    },
  },
};

export const WithHtmlFor: Story = {
  args: {
    htmlFor: 'username-input',
    children: 'Username:',
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <>
        <Label {...args} />
        <TextBox
          id={args.htmlFor}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'A label associated with an input element via the htmlFor attribute.',
      },
    },
  },
};
