import styled from "styled-components"

const LogoSt = styled.div`
    border-radius: 100%;
    color: #00d647;
    margin-right: 100px;
    text-align: center;
    font-size: 20px;
    box-shadow:  3px 0px 1px #00d647;
    font-weight: 700;
    width: 40px;
    padding: 5px 0;
`;

export function Logo() {
    return (
        <LogoSt>
            F
        </LogoSt>
    )
}