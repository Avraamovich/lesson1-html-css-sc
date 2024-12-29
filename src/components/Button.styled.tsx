import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animation/Animation";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "primary" | "outlined"
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    //background-color: #ea6aa6;
        // background-color: ${props => props.color || "#ea6aa6"};
    padding: 10px 20px;
    border-radius: 5px;
    color: #0b0a0a;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;

    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#9c9052"};
        color: ${props => props.color || "#101010"};
        background-color: transparent;
        &:hover {
            border-color: #6c986a;
            color: #6c986a;
            background-color: transparent;
        }
    `}

    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "#deef9e"};
        color: #0b0a0a;

        &:hover {
            background-color: #6c986a;
        }
    `}
`

// export const SuperBtn = styled(StyledBtn)`
//     border-radius: 3px;
//     background-color: #fdf287;
//     color: #020000;
//
//     &:hover {
//     animation: ${MyAnimation} 3s ease-in-out;
//     }
// `