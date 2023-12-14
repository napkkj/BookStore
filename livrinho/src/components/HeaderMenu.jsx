import styled from "styled-components"
import {FaBars, FaBarsStaggered} from 'react-icons/fa6'
import { Link } from "react-router-dom"

const DropdownMenu = styled.section`
    position: relative;
`
const DropdownSelect = styled.section`
    display: flex;
    align-items: center;
    color: white;
    gap: 5px;
    cursor: pointer;
    padding: 8px 5px;

    ${DropdownMenu}:hover & {
        background-color: var(--cor-secundaria);
        color: black;
    }
`
const DropdownText = styled.p`
    font-size: 17px;
`
const DropdownContent = styled.section`
    background-color: #f6f5f5;
    display: none;
    position: absolute;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center; 
    text-align: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    ${DropdownMenu}:hover & {
        display: flex;
    }
`
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    width: 100%;
    padding: 8px 0;
    
    &:hover{
        color: var(--cor-secundaria);
    }
`

const ClosedMenuIcon = styled(FaBars)`
    width: 20px;
    height: 20px;
    display: block;

    ${DropdownMenu}:hover & {
        display: none;
    }
`
const OpenedMenuIcon = styled(FaBarsStaggered)`
    width: 20px;
    height: 20px;
    display: none;

    ${DropdownMenu}:hover & {
        display: block;
    }
`
export default function HeaderMenu(){

    return(
        <DropdownMenu >
            <DropdownSelect>
                <ClosedMenuIcon/>
                <OpenedMenuIcon/>
                <DropdownText>Categorias</DropdownText>
            </DropdownSelect>
            <DropdownContent>
                <StyledLink to='/livros/fantasia' >Fantasia</StyledLink>
                <StyledLink to='/livros/ficcao'   >Ficção  </StyledLink>
                <StyledLink to='/livros/receitas' >Receitas</StyledLink>
                <StyledLink to='/livros/religiao' >Religião</StyledLink>
                <StyledLink to='/livros/romances' >Romances</StyledLink>
                <StyledLink to='/livros/terror'   >Terror  </StyledLink>
            </DropdownContent>
        </DropdownMenu>
        
    )
}