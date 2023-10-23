import React, {PropsWithChildren, ReactElement} from 'react';
import {render, RenderOptions} from "@testing-library/react";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import {getTheme} from "@/util/theme/Theme";

const AllTheProviders: React.FC = (props: PropsWithChildren) => {

  const {children} = props;

  return (
    <ThemeProvider theme={getTheme("light")}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react';
export {customRender as render};
