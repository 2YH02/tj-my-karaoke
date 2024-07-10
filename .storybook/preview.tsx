import { Global } from "@emotion/react";
import type { Preview } from "@storybook/react";
import React from "react";
import globalStyles from "../src/global-styles";

const withGlobalStyles = (Story: any) => (
  <>
    <Global styles={globalStyles} />
    <Story />
  </>
);

export const decorators = [withGlobalStyles];

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
