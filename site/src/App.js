import React from 'react';
import {Landing, NavHeader, OnlineIdentities} from './components'
import { Grid, Cell } from 'styled-css-grid';
import styled, { withTheme } from 'styled-components';
import { GlobalStyles } from './styling/global';
import { buttonBackgroundColor, buttonTextColor } from './styling/theme';
import { useTheme } from './styling/ThemeContext';
import Sticky from "react-stickynode"
import beach from "./assets/beach.jpeg"

function App (props) {
  const themeToggle = useTheme();

  const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;
  
  return (
    <div>
      <GlobalStyles/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />  
      <Grid columns={"100px 1fr 100px"} rows={"minmax(45px,auto) 1fr minmax(45px,auto)"}>
      <Cell><sidebar className="App-sidebar"/></Cell>
      <Cell>

        <Landing/>
        <Sticky>
        <NavHeader/>
        </Sticky>
        <div>
          <img src={beach} width="100%" />
        </div>        
      </Cell>
      <Cell ><sidebar className="App-sidebar"/></Cell>
      <Cell width={3} ><OnlineIdentities/></Cell>
      </Grid>
      </div>
  );
}

export default withTheme(App);
