import type { Preview } from '@storybook/react-vite';
import '../src/img/atlas.css';
import '../src/fonts/fonts.css';
import '../src/variables.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
