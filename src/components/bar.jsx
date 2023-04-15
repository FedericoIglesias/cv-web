import styled from "styled-components"
import { theme } from "../theme/theme";
import { Logo } from "./logo";

const BarSt = styled.section`
    background-color: #324158;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 2px 5px gray;
    & p{
        margin-right: 20px;
        color: #939dab;
        :hover{
            color: #fff;
        }
    }
`;

export function Bar (){

    

    return(
        <BarSt>
            <Logo/>
        <p>INICIO</p>
        <p>HABILIDADES</p>
        <p>EXPERIENCIA</p>
        <p>PORTFOLIO</p>
        <p>CONTACTO</p>
        </BarSt>
    )
}