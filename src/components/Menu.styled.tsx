import styled from "styled-components";

export const MenuStyled = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;

        li > a {
            color: #6505c1;
        }
        
        li + li {
            margin-left: 16px;
        }
    }
`