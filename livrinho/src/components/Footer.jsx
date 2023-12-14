// styled components
import styled from 'styled-components'
// imagens
import SeloSeguranca1 from '../images/RA1000 1.png'
import SeloSeguranca2 from '../images/pci-menor 1.png'
import SeloSeguranca3 from '../images/imagens-de-selo-de-seguranca-png-8 1.png'

import { Link } from 'react-router-dom';

// React Icons
import Logo from '../images/logo-preto.png'
import {FaSquareYoutube, FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter, FaCcVisa, FaLinkedin } from 'react-icons/fa6'





const FooterContainer = styled.footer`
    font-family: var(--font-main);
`
const FooterTitle = styled.h4`
    font-size: 18px;
    padding: 0 0 15px 0 ;
    font-weight: bold;
    
    `
const LinkFooter = styled.a`
    font-size: 14px;
    text-decoration: none;
    color: rgb(255, 255, 255);
    
    &:hover {
        color: var(--cor-secundaria);
        text-decoration: underline;
    }
    `


const ImgSeguranca = styled.img`
    margin: 0 5px;
    width: 50px;
    `

const SectionComTexto = styled.section`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    gap: 20px;
`
const PrimeiraSectionBackground = styled.div`
    background-color: var(--cor-secundaria);
    display: flex;
    justify-content: center;
`
const PrimeiraSection = styled.section`
    width: 1250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const LeveBook = styled(Link)`
    color: #000;
    text-decoration: none;
    display: flex;
    flex-direction:row;
    align-items: center;
    gap: 2px;
    font-size: 14px;
`
const RedesSociais = styled.section`
    display: flex;
    gap: 40px;
`
const HeaderLogo = styled.img`
    width: 100px;
`
const NomeLoja = styled.h1`
    font-family: var(--font-secundaria);
    font-size: 26px;
`
const SegundaSectionBackground = styled.div`
    width: 100%;
    background-color:var(--cor-primaria);
    display: flex;
    justify-content: center;
`
const SegundaSection = styled.section`
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    width: 1250px;
    box-sizing: border-box;
`
const MiniSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
const DivPagamentos = styled.div`
    display: flex;
    gap: 10px;
`
export default function Footer() {
    return(

        <FooterContainer>
            <PrimeiraSectionBackground>
                <PrimeiraSection>
                    <LeveBook to='/'>
                        <HeaderLogo src={Logo}/>
                        <NomeLoja>Leve Book</NomeLoja>
                    </LeveBook>
                    <RedesSociais>
                        <LinkFooter href=""><FaSquareInstagram color = 'black'  size={33}/></LinkFooter>
                        <LinkFooter href=""><FaSquareFacebook  color = 'black'  size={33}/></LinkFooter>
                        <LinkFooter href=""><FaSquareYoutube   color = 'black'  size={33}/></LinkFooter>
                        <LinkFooter href=""><FaSquareXTwitter  color = 'black'  size={33}/></LinkFooter>
                        <LinkFooter href=""><FaLinkedin  color = 'black'  size={33}/></LinkFooter>
                    </RedesSociais>
                </PrimeiraSection>
            </PrimeiraSectionBackground>
            <SegundaSectionBackground>
                <SegundaSection>
                    <SectionComTexto>
                        <FooterTitle>Privacidade Termos</FooterTitle>
                        <LinkFooter href="">Política de Pagamento</LinkFooter>
                        <LinkFooter href="">Política de Privacidade</LinkFooter>
                        <LinkFooter href="">Trocas e Devoluções</LinkFooter>
                        <LinkFooter href="">Encontre o seu pedido</LinkFooter>
                    </SectionComTexto> 
                    <SectionComTexto>
                        <FooterTitle>Informações</FooterTitle>
                        <LinkFooter href="">Parceiros</LinkFooter>
                        <LinkFooter href="">Sobre nós</LinkFooter>
                        <LinkFooter href="">Fale conosco</LinkFooter>
                    </SectionComTexto>
                    <MiniSection>
                        <section>
                            <FooterTitle>Métodos de pagamento</FooterTitle>
                            <DivPagamentos>
                                <FaCcVisa size='28px'/>
                                <FaCcVisa size='28px'/>
                                <FaCcVisa size='28px'/>
                                <FaCcVisa size='28px'/>
                                <FaCcVisa size='28px'/>
                            </DivPagamentos>
                            <DivPagamentos> 
                                <FaCcVisa size='28px'/>
                                <FaCcVisa size='28px'/>
                                <FaCcVisa size='28px'/>
                                <FaCcVisa size='28px'/>
                                <FaCcVisa size='28px'/>
                            </DivPagamentos>
                        </section>
                        <section>
                            <FooterTitle>Selos de Qualidade e segurança</FooterTitle>
                            <ImgSeguranca src={SeloSeguranca1} alt="Selo de Segurança"/>
                            <ImgSeguranca src={SeloSeguranca2} alt="Selo de Segurança"/>
                            <ImgSeguranca src={SeloSeguranca3} alt="Selo de Segurança"/>
                        </section> 
                    </MiniSection>
                </SegundaSection>
            </SegundaSectionBackground>
        </FooterContainer>
        
    )
}
 