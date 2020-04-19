import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {backgroundColor} from '../styling/theme'
import { Spring } from 'react-spring/renderprops'

const Section = ({ className, children }) => {
    return (
        
            <div className={className}>
                {children}
            </div>
        
    );
};

Section.propTypes = {
    
};

const StyledSection = styled(Section)`
    margin: 0;
    display: block;
    min-height: 100vh;
    height: 100vh;
    background-color: ${backgroundColor};
`;

export default StyledSection