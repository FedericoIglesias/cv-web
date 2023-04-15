import styled from "styled-components"

const PresentationSt = styled.section`
    text-align: left;
    color: #fff;
    & div{
        width: 400px;
        margin: 100px auto 0px;
    }
    & h1{
        font-size: 70px;
        & span{
            color: #00d647;
        }
    }
    & p{
        font-size: 30px;
        margin: auto;
    }
`;

export function Presentation() {
    return (
        <PresentationSt>
            <div>
                <h1>
                    SOY IGLESIAS FEDERICO <span>.</span>
                </h1>
                <p>
                    Desarrollador Full Stack
                </p>
            </div>
        </PresentationSt>
    )
}