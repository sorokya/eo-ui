import type { Preview } from '@storybook/react-vite';
import '../src/atlas.css';
import '../src/fonts.css';
import '../src/variables.css';
import {
  DocsContainer,
  type DocsContainerProps,
} from '@storybook/addon-docs/blocks';
import { themes } from 'storybook/theming';
import { useIsDarkMode } from './hooks'; // the hook we defined above

function ThemedDocsContainer(
  props: React.PropsWithChildren<DocsContainerProps>,
) {
  const isDarkMode = useIsDarkMode(); // the hook we defined above

  return (
    <DocsContainer
      theme={isDarkMode ? themes.dark : themes.light}
      context={props.context}
    >
      {props.children}
    </DocsContainer>
  );
}

const preview: Preview = {
  parameters: {
    docs: {
      container: ThemedDocsContainer,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'dark',
      stylePreview: true,
    },
  },
};

export default preview;
