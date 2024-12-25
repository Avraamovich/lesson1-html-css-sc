import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className="App">

            <Menu>
                <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as={Link} href="#">Link</StyledBtn>
                <StyledBtn as="a" href="#">Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperBtn>Super Button</SuperBtn>
            </Box>
        </div>
    );
}

export default App;

const StyledBtn = styled.button`
    border: none;
    background-color: #ea6aa6;
    padding: 10px 20px;
    border-radius: 5px;
    color: #f6efef;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #f14d76;
    }
`
const Link = styled.a`
    color: #4cadf8;
    font-size: 2rem;
    font-weight: bold;
    background-color: transparent;
`

const SuperBtn = styled(StyledBtn)`
    border-radius: 3px;
    background-color: #fdf287;
    color: #020000;
`

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    button{
        cursor: pointer;
    }
    
    ${Link} {
        cursor: zoom-in;
    }
`

const Menu = styled.nav`
    ul{
        list-style: none;
        padding: 0;
    }
`