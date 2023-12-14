import styled from "styled-components"

const Card = styled.div`
    width: 480px;
    min-width: 480px;
    backdrop-filter: blur(15px);
    text-align: center;
    border-radius: 7px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);    box-sizing: border-box;
    overflow: hidden;
    padding: 0px 50px;
    @media (max-width: 530px) {
        min-width: 100%;
    }
`

export default function LoginCard(props){
    return(
        <Card>{props.children}</Card>
    )
}