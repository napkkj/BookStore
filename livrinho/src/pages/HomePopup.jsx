import styled from "styled-components";
import Header from "components/Header";
import HeaderSection from "components/HeaderSection";
import Footer from "components/Footer";

import React from 'react';
import Slider from 'infinite-react-carousel';




// Images
import mainbanner from "../images/home-banner.jpg";
import loginimg from "../images/popupillustration.png";
import fourthbanner from "../images/home-banner4.jpg";
import fifthbanner from "../images/home-banner5.jpg";
import secondbanner from "../images/home-banner2.jpg";
import thirdbanner from "../images/home-banner3.jpg";
import silverswan from "../images/books/TheSilverSwan.jpg";
import sequisermudaromundo from "../images/books/SeQuiserMudaroMundo.jpg";
import vermelhobrancosangueazul from "../images/books/VermelhoBrancoeSangueAzul.jpg";
import lupin from "../images/books/lupin.jpg";
import ladykillers from "../images/books/LadyKillers.png";






const PopupIllustration = styled.img `
    z-index: 2;
    width: 20%;
  border-radius: 10px;
  position: fixed;
    top: 350px; /* Ajuste conforme necessário para a posição vertical desejada */
    left: 50%;
    transform: translateX(-50%);
`



const Dots = styled.div `
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 150px; /* Ajuste conforme necessário para a posição vertical desejada */
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
`


const FirstDot = styled.div `
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: .5vw;
  height: .5vw;
  background-color: #0000000;
  border: 3px solid #F78310;
  border-radius: 20px;
  z-index: 2;
  margin-left: .25vw;
`


const SecondDot = styled.div `
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: .5vw;
  height: .5vw;
  background-color: #767676;
  border-radius: 20px;
  z-index: 2;
  margin-left: .25vw;
`




const ThirdDot = styled.div `
      top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: .5vw;
  height: .5vw;
  background-color: #767676;
  border-radius: 20px;
  z-index: 2;
  margin-left: .25vw;
`



const FourthDot = styled.div `
      top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: .5vw;
  height: .5vw;
  background-color: #767676;
  border-radius: 20px;
  z-index: 2;
  margin-left: .25vw;
`



const FifthDot = styled.div `
      top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: .5vw;
  height: .5vw;
  background-color: #767676;
  border-radius: 20px;
  z-index: 2;
  margin-left: .25vw;
`







const SimpleSlider = () => (
    <Slider dots>
        
      <div>
        <img src={fifthbanner} alt="Banner 1" />
      </div>
      <div>
      <img src={secondbanner} alt="Banner 2" />
      </div>
      <div>
      <img src={fourthbanner} alt="Banner 1" />
      </div>
      <div>
      <img src={mainbanner} alt="Banner 1" />
      </div>
      <div>
      <img src={thirdbanner} alt="Banner 1" />
      </div>
    </Slider>
  );


const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;




const WhiteSquare = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 40vw;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 20px;
  z-index: 1;
`;






const Products = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  margin-bottom: 25vw;
  margin-top: 15vw;
  align-self: center;
  
`;




const BooksOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: 25px;
    margin: 0 auto;
`;



const Book = styled.img`
  width: 100%;
  border-radius: 10px;
`;




const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px; /* Ajuste a largura conforme necessário */
  margin: 5vw;
`;




const ProductsTitle = styled.div`
    color: #000;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 50px;
    margin-bottom: 15px;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Line = styled.footer`
width: 1500px;
height: 1px;
background-color: gray;
`


const ProductsSubTitle = styled.div`
     color: #00000083;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    white-space: nowrap;
`;




const BigThank = styled.div `
         color: #000000;
    font-family: Montserrat;
    font-size: 35px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    white-space: nowrap;
    z-index: 2;
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
`


const SmallThank = styled.div `
             color: #000000;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    white-space: nowrap;
    z-index: 2;
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translateX(-50%);
`



const ContinueButton = styled.div `
                 color: #ffffff;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    white-space: nowrap;
    z-index: 2;
    position: fixed;
    top: 700px;
    left: 50%;
    background-color: #F78310;
    padding:30px;
    padding-left: 180px;
    padding-right: 180px;
    border-radius: 15px;
    transform: translateX(-50%);
`



export default function popup() {


    window.addEventListener('wheel', function(e) {
        e.preventDefault();
      }, { passive: false });

        


  return (
    <div>
        
      <Header />
      <HeaderSection/>
    <Body>
      <main>

        <SimpleSlider></SimpleSlider>

        <Products>
                <ProductsTitle>Veja  nossas ofertas</ProductsTitle>
                <ProductsSubTitle>Não deixe a história acabar. Busque por sua próxima aventura...</ProductsSubTitle>




<Dots>
                <FirstDot />
                <SecondDot />
                <ThirdDot />
                <FourthDot />
                <FifthDot />
                </Dots>

                <BigThank>Obrigado por se cadastrar!</BigThank>
                <SmallThank>Somos gratos por ter você conosco.</SmallThank>
                <PopupIllustration src={loginimg}/>
                <ContinueButton>Continuar</ContinueButton>
                <WhiteSquare />




                <BooksOptions>
                    < Options>
                        <Book src={silverswan} />
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                    </Options>

                    <Options>
                        <Book src={lupin} alt=""/>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                    </Options>

                </BooksOptions>                
            </Products>


            <Products>
                <ProductsTitle>Escolhidos a dedo</ProductsTitle>
                <ProductsSubTitle>Criamos uma biblioteca só sua, com base em seus interesses</ProductsSubTitle>
                


                <BooksOptions>

                    < Options>
                        <Book src={silverswan}/>
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                    </Options>

                    <Options>
                        <Book src={lupin} alt=""/>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                    </Options>

                </BooksOptions>                
            </Products>


            <Products>
                <ProductsTitle>Clássicos do terror</ProductsTitle>
                <ProductsSubTitle>O halloween já passou, mas ainda da tempo de ver os bestsellers do medo</ProductsSubTitle>
                

                <BooksOptions>

                    < Options>
                        <Book src={silverswan} />
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                    </Options>

                    <Options>
                        <Book src={lupin} alt=""/>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                    </Options>

                </BooksOptions>                
            </Products>


            <Products>
                <ProductsTitle>Os melhores</ProductsTitle>
                <ProductsSubTitle>Obras com as melhores avaliações em nosso site</ProductsSubTitle>
                

                <BooksOptions>

                    < Options>
                        <Book src={silverswan} />
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                    </Options>

                    <Options>
                        <Book src={lupin} alt=""/>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                    </Options>

                </BooksOptions>                
            </Products>


            <Products>
                <ProductsTitle>Veja  nossas ofertas</ProductsTitle>
                <ProductsSubTitle>Não deixe a história acabar. Busque por sua próxima aventura...</ProductsSubTitle>
                

                <BooksOptions>

                    < Options>
                        <Book src={silverswan} />
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                    </Options>

                    <Options>
                        <Book src={lupin} alt=""/>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                    </Options>

                </BooksOptions>                
            </Products>


            <Products>
                <ProductsTitle>Veja  nossas ofertas</ProductsTitle>
                <ProductsSubTitle>Não deixe a história acabar. Busque por sua próxima aventura...</ProductsSubTitle>
                

                <BooksOptions>

                    < Options>
                        <Book src={silverswan} />
                    </Options>

                    <Options>
                        <Book src={sequisermudaromundo} />
                    </Options>

                    <Options>
                        <Book src={vermelhobrancosangueazul}/>
                    </Options>

                    <Options>
                        <Book src={lupin} alt=""/>
                    </Options>

                    <Options>
                        <Book src={ladykillers}/>
                    </Options>

                </BooksOptions>                
            </Products>


      </main>
      <Line />
    </Body>
      <Footer />
    </ div>
    
  );
}
