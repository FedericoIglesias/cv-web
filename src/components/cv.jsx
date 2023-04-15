import styled from "styled-components"
import { Logo } from "./logo"

const Btn = styled.button`
    color: #fff;
    border: 2px solid #00d647;
`;

const CvSt = styled.section`
    width: 70%;
    background-color: #324158;
    padding: 30px;
    margin: auto;
`;

export function Cv() {
    return (
        <CvSt>
            <Logo/>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam libero sint nisi, expedita maxime saepe eum atque illo laudantium officia rerum nam alias consequatur nulla sapiente nihil? Eius, hic quasi.
            </p>
            <Btn>Descargar Cv</Btn>
        </CvSt>
    )
}