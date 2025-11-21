import type { Meta, StoryObj } from '@storybook/react-vite';
import { Panel } from './panel';

const meta: Meta<typeof Panel> = {
  title: 'Components/Panel',
  component: Panel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A panel component with a decorative border and semi-transparent background.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  args: {
    children: 'This is a panel with a thin border',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default panel with thin border styling.',
      },
    },
  },
};

export const MediumBorder: Story = {
  args: {
    borderStyle: 'medium',
    children: 'This is a panel with a medium border',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A panel variant with a medium border style. Looks best with a taller aspect ratio.',
      },
    },
  },
};

export const CustomPaddingAndOpacity: Story = {
  args: {
    padding: '20px 10px',
    backgroundOpacity: 0.8,
    children:
      'This panel has custom padding and background opacity for better content visibility.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A panel with increased padding and higher background opacity to enhance content visibility.',
      },
    },
  },
};

export const BoldText: Story = {
  args: {
    bold: true,
    children: 'This panel has bold text',
  },
  parameters: {
    docs: {
      description: {
        story: 'A panel variant that displays its text in bold font weight.',
      },
    },
  },
};
