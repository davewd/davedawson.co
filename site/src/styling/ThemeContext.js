import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from './theme';

// #global 
const ThemeToggleContext = React.createContext();


export const useTheme = () => React.useContext(ThemeToggleContext);

const Wrapper = styled.div`
background-color: ${backgroundColor};
color: ${textColor};
`;
export const MyThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = React.useState({
    mode: 'light'
  });



  const toggle = () => {
    // Sets the context data - using the concept of a React Context
    var themes = ['light','dark','yellow','blue']
    var curr_index = themes.indexOf(themeState.mode)
    const mode = themes[ (curr_index+1) % themes.length];
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