import styled from "styled-components"


const SegundaSection = styled.section`
    background-color: var(--cor-secundaria);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
`
const TextoSegundaSection = styled.p`
    font-size: 15px;
    font-family: var(--font-secundaria);
`

export default function HeaderSection(){
    return(
        <SegundaSection>
            <TextoSegundaSection>Natal chegou! Use o código "NATAL2023" para 20% de desconto em todas as compras.</TextoSegundaSection>
        </SegundaSection>
    )
}