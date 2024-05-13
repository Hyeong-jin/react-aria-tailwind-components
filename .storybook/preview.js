import { themes } from '@storybook/theming'
import '../src/index.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    //  TODO: need to add actions to each component
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {},
    },
    docs: {
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? themes.dark
        : themes.light,
    },
  },
}

export default preview
