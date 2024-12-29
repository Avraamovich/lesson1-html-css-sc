import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from './components/Button.styled';
import { LinkStyled } from './components/Link.styled';
import { MenuStyled } from './components/Menu.styled';

function App() {
    return (
        <div className="App">

            <MenuStyled>
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </MenuStyled>
            <Box>
                {/*<StyledBtn color={'green'} fontSize={"20px"}>Hello</StyledBtn>*/}
                {/*<StyledBtn>Hello</StyledBtn>*/}

                <StyledBtn btnType={"primary"}>Button - 1</StyledBtn>
                <StyledBtn btnType={"outlined"}>Button - 2</StyledBtn>
            </Box>
        </div>
    );
}

export default App;


const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    button{
        cursor: pointer;
    }
    
    ${LinkStyled} {
        cursor: zoom-in;
    }
    
    @media  screen and (max-width: 760px) {
      flex-direction: column;
    }
`

