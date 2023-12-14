import { useState } from "react"

// styled components
import styled from "styled-components"
// componentes
import LoginCard from "components/LoginCard"
import LoginCriarConta from 'components/LoginCriarConta'
import LoginEntrar from 'components/LoginEntrar'
// Imagens
import BackgroundLogin from '../images/login-background.png'

const PageWrapper = styled.div`
    background: url(${BackgroundLogin});
    background-size:cover;
    background-repeat: no-repeat;
    height: 100vh;
`
const LoginContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-main);
    height: 100vh;
    margin: 0 30px;
    gap: 150px;
    color: white;
`
const DivBemVindo = styled.div`
    color: #FFF;
    width: 800px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 1050px) {
        display: none;
    }
`
const NomeDoSite = styled.h1`
    font-size: 60px;
    font-weight: 700;
`
const TextoBemVindo = styled.h2`
    font-size: 35px;
    font-weight: 700;
`
const DescDoSite = styled.p`
    font-size: 18px;
`



export default function Login() {
    const [modo, setModo] = useState('criar-conta');
    
    const componentes = {
        'criar-conta': <LoginCriarConta atualizarModo={setModo}/>,
        'entrar': <LoginEntrar atualizarModo={setModo}/>,
      };


    return (
        <PageWrapper>
            <LoginContainer>
                <DivBemVindo>
                    <NomeDoSite>LeveBook</NomeDoSite>
                    <TextoBemVindo>Bem-vindo!</TextoBemVindo>
                    <DescDoSite>Seja você um ávido leitor ou apenas esteja começando a 
                    descobrir o encanto das palavras impressas, este é o lugar onde as 
                    palavras saltam das páginas para dar vida a mundos
                    desconhecidos e personagens inesquecíveis.</DescDoSite>
                </DivBemVindo>
                <LoginCard>
                    {componentes[modo]}
                </LoginCard>
            </LoginContainer>
        </PageWrapper>
    )
}