import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {backgroundColor} from '../styling/theme'
import { Spring } from 'react-spring/renderprops'
import { Route } from "react-router-dom";

const Section = props => {
    return (
        <Route path={props.path} className={props.className}>
            <div {...props} className={props.className}>
            {console.log(props.className)}
                {props.children}
            </div>
        </Route>
    );
};

Section.propTypes = {

};

const StyledSection = styled(Section)`
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100vh;
    width: 100%;
    background-color: ${backgroundColor};
    text-align: center;
    align-items: center;

`;

export default StyledSection