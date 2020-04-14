import React from 'react';
import {Landing, NavHeader, OnlineIdentities} from './components'
import { Grid, Cell } from 'styled-css-grid';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './global';

function App() {
  return (
    <ThemeProvider theme={{ mode: 'yellow' }}>
      <GlobalStyles/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />  
      <NavHeader/>

      <Grid columns={"100px 1fr 100px"} rows={"minmax(45px,auto) 1fr minmax(45px,auto)"}>
      <Cell><sidebar className="App-sidebar"/></Cell>
      <Cell>
        <Landing/>
      </Cell>
      <Cell ><sidebar className="App-sidebar"/></Cell>
      <Cell width={3} ><OnlineIdentities/></Cell>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
