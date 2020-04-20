import React from 'react';
import {StyledSection, Landing, NavHeader, Footer} from './components'
import { Grid, Cell } from 'styled-css-grid';
import styled, { withTheme } from 'styled-components';
import { GlobalStyles } from './styling/global';
import Sticky from "react-stickynode"
import { BrowserRouter as Router, Redirect } from "react-router-dom";
/*import beach from "./assets/beach.jpeg"*/

const Sidebar = styled.div`
background-color:  rgb(0, 119, 255);
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`;

// https://reacttraining.com/blog/reach-react-router-future/

function App (props) {

  return (
    <div className={props.className}>
      <GlobalStyles/>


      <Grid columns={"100px 1fr 100px"} rows={"minmax(45px,auto) 1fr minmax(45px,auto)"}>
      <Cell><Sidebar/></Cell>
      <Cell>
      <Router>
        <Sticky>
          <NavHeader/>
        </Sticky>
        <StyledSection path="/overview">
          <Landing/>
        </StyledSection>
        <StyledSection path="/performance">
          <h1>Performance Dashboard</h1>
        </StyledSection>
        <StyledSection path="/portfolio">
          <h1>Portfolio</h1>
        </StyledSection>
        <StyledSection path="/project_list">
          <h1>Project List</h1>
        </StyledSection>
        <StyledSection path="/fitness">
          <h1>Fitness</h1>
        </StyledSection>
        <StyledSection path="/cooking">
          <h1>Cooking</h1>
        </StyledSection>
        <StyledSection path="/blog">
          <h1>Blog</h1>
        </StyledSection>
        <StyledSection path="/gallery">
          <img src="./assets/beach.jpeg" width="100%" alt="the beach"/>
        </StyledSection>
        <Redirect from="/" to="/overview" />
      </Router>
      </Cell>
      <Cell ><Sidebar/></Cell>
      <Cell width={3} ><Footer/></Cell>
      </Grid>
      </div>
  );
}

export default styled(App)`
font-size:16px;
font-stretch:100%;
font-style:normal;
font-variant-caps:normal;
font-variant-east-asian:normal;
font-variant-ligatures:normal;
font-variant-numeric:normal;
font-weight:400;
font-family:-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

h1 {
  font-size: 40px
}
`;
