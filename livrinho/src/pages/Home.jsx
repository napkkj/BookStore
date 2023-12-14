import styled from "styled-components";
import Header from "components/Header";
import HeaderSection from "components/HeaderSection";
import Footer from "components/Footer";

import React from 'react';
import Slider from 'infinite-react-carousel';




// Images
import mainbanner from "../images/home-banner.jpg";
import fourthbanner from "../images/home-banner4.jpg";
import fifthbanner from "../images/home-banner5.jpg";
import secondbanner from "../images/home-banner2.jpg";
import thirdbanner from "../images/home-banner3.jpg";
import silverswan from "../images/books/TheSilverSwan.jpg";
import sequisermudaromundo from "../images/books/SeQuiserMudaroMundo.jpg";
import vermelhobrancosangueazul from "../images/books/VermelhoBrancoeSangueAzul.jpg";
import lupin from "../images/books/lupin.jpg";
import ladykillers from "../images/books/LadyKillers.png";





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
  margin-bottom: .5vw;
`;





const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px; /* Ajuste a largura conforme necessário */
  margin: 5vw;
  background-color: white;
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

const BookTitle = styled.div `
         color: #00000083;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    white-space: nowrap;
`




export default function Home() {

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








                <BooksOptions>
                    < Options>
                        <Book src={silverswan} />
                        <BookTitle>Silver Swan</BookTitle>
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
    </div>
    
  );
}
