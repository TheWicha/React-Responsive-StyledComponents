import React from 'react';
import styled from 'styled-components';
import img from './images/response.png'

const LogoImg = styled.img.attrs({
    src: img,
})`
width: 200px;
height: auto;
`

const Logo:React.FC = () =>{
    return(
        <a href='/'>
            <LogoImg />
        </a>
    )
}


export default Logo