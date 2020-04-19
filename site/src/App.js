import React from 'react';
import {StyledSection, Landing, NavHeader, Footer} from './components'
import { Grid, Cell } from 'styled-css-grid';
import styled, { withTheme } from 'styled-components';
import { GlobalStyles } from './styling/global';
import Sticky from "react-stickynode"

/*import beach from "./assets/beach.jpeg"*/

const Sidebar = styled.div`
background-color:  rgb(0, 119, 255);
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`;

function App (props) {
  
  return (
    <div>
      <GlobalStyles/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />  
      <Grid columns={"100px 1fr 100px"} rows={"minmax(45px,auto) 1fr minmax(45px,auto)"}>
      <Cell><Sidebar/></Cell>
      <Cell>
        <StyledSection>
          <Landing/>
        </StyledSection>
        <Sticky>
          <NavHeader/>
        </Sticky>
        <StyledSection>
          <a></a>
          <h1>Performance Dashboard</h1>
        </StyledSection>
        <StyledSection>
          <h1>Portfolio</h1>
        </StyledSection>
        <StyledSection>
          <h1>Project List</h1>
        </StyledSection>
        <StyledSection>
          <h1>Fitness</h1>
        </StyledSection>
        <StyledSection>
          <h1>Cooking</h1>
        </StyledSection>
        <StyledSection>
          <h1>Blog</h1>
        </StyledSection>
        <StyledSection>
          <img src="./assets/beach.jpeg" width="100%" alt="the beach"/>
        </StyledSection>
      </Cell>
      <Cell ><Sidebar/></Cell>
      <Cell width={3} ><Footer/></Cell>
      </Grid>
      </div>
  );
}

export default withTheme(App);
