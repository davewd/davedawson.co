import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from './theme';

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = React.useState({
    mode: 'light'
  });

  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  const toggle = () => {
    var themes = ['light','dark','yellow','blue']
    var curr_index = themes.indexOf(themeState.mode)
    const mode = themes[ (curr_index+1) % themes.length];
    console.log(mode);
    setThemeState({ mode: mode });
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;