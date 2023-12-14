// React Router
import styled from 'styled-components';
import { Link} from 'react-router-dom';

// componentes
import HeaderLink from './HeaderLink';
import HeaderMenu from './HeaderMenu';
// imagens
import Logo from '../images/logo.png'
// React Icons
import {RiShoppingBasket2Line, RiHeartLine, RiUser3Line, RiSearchLine, RiLogoutBoxLine} from 'react-icons/ri'

import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, firebaseApp } from '../services/firebaseConfig';





const HeaderBackground = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 10px 0 ;
    background-color: var(--cor-primaria);
`
const HeaderContainer = styled.div`
    font-family: var(--font-main);
    width: 1250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LeveBook = styled(Link)`
    color: #FFF;
    text-decoration: none;
    display: flex;
    flex-direction:row;
    align-items: center;
    gap: 2px;
    font-size: 14px;
`

const HeaderLogo = styled.img`
    width: 80px;
`
const NomeLoja = styled.h1`
    font-family: var(--font-secundaria);
    font-size: 24px;
`

const FormPesquisa = styled.form`
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

`
const BarraDePesqisa = styled.input`
    width: 500px;
    height: 40px;
    font-size: 19px;
    background-color: #e3e2e2;
    color: #000000a8;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 0 49px 0 10px;

    &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }
`
const IconeLupa = styled.button`
    font-size: 24px;
    position: absolute;
    right: 10px;
    top: 6px;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
`
const NavBar = styled.menu`
    display: flex;
    gap: 40px;
`
const SairLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #FFF;
  text-decoration: none;
  gap: 5px;
`;

export default function Header({setUserDisplayName}) {

  const userDisplayName = localStorage.getItem("@AuthFirebase:userDisplayName");
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();
  const isAuthenticated = Boolean(userDisplayName);

  const itensNavHeader = [
    {
        nome: 'Favoritos',
        icone: <RiHeartLine size={22}/>,
        pathname: '/favoritos'
    },
    {
        nome: isAuthenticated ? `Olá, ${userDisplayName}` : 'Entrar',
        icone: <RiUser3Line size={22}/>,
        pathname: isAuthenticated ? '/conta' : '/login'
    },
    {
        nome: 'Minha Cesta',
        icone: <RiShoppingBasket2Line size={22}/>,
        pathname: '/cesta'
    }
  ]
  
    const handleLogout = () => {
        try {
          // Limpe os itens no localStorage ou realize outras ações necessárias
          localStorage.removeItem("@AuthFirebase:userDisplayName");
          localStorage.removeItem("@AuthFirebase:token");
          localStorage.removeItem("@AuthFirebase:user");
      
          // Desconecte o usuário
          auth.signOut();
      
          // Redirecione para a página de login ou faça o que for apropriado para o seu aplicativo
          navigate('/login');
        } catch (error) {
          console.error("Erro durante o logout:", error);
        }
      };
      
      return (
        <HeaderBackground>
          <HeaderContainer>
            <LeveBook to='/'>
              <HeaderLogo src={Logo} />
              <NomeLoja>Leve Book</NomeLoja>
            </LeveBook>
            <HeaderMenu />
            <FormPesquisa>
              <BarraDePesqisa type='search' placeholder='O que você está procurando?' />
              <IconeLupa>
                <RiSearchLine />
              </IconeLupa>
            </FormPesquisa>
            <NavBar>
              {itensNavHeader.map((item) => (
                <HeaderLink key={item.pathname} to={item.pathname}>
                  {item.icone}
                  {item.nome}
                </HeaderLink>
              ))}
            </NavBar>
          </HeaderContainer>
        </HeaderBackground>
      );
    }
  