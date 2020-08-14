import React from 'react';
import styled from 'styled-components';




const CustomSearchButton:React.FC = () => {
    
    return(
        <StyledButton as='input' type='submit' value='search' />
    )
}


export default CustomSearchButton

const StyledButton = styled.button`
    border-radius: 0px;
    padding: 0 1em;
    outline: none;
    border-color: #ff5a00;
    background-color: #ff5a00;
    border-style: solid;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
    transition: background-color .2s linear;
    &:hover{
        border-color: #ff7b33;
        background-color: #ff7b33;
    }
`
