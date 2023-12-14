import React, { useState, useEffect } from "react";

import styled from "styled-components";
import LoginInputLabel from "components/LoginInputLabel"; // Importa um componente personalizado

import { FcGoogle } from 'react-icons/fc'; // Importa o ícone do Google
import { IoIosArrowBack } from 'react-icons/io'; // Importa o ícone de seta para voltar
import { useNavigate } from 'react-router-dom'; // Importa utilitários de roteamento
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'; // Importa as funções de autenticação do Firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../services/firebaseConfig";


const SetaVoltar = styled(IoIosArrowBack)`
    height: 25px;
    width:  25px;
    position: absolute;
    top: 13px;
    left: 10px;
    cursor: pointer;
`
const TituloEntrar = styled.h2`
    font-family: var(--font-main);
    font-size: 21px;
    font-weight: 500;
    margin: 60px 0;
`
const FormEntrar = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const SectionSubmit = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    padding: 0 4% 50px 4%;
`
const LoginFormSubmit = styled.input`
    border: none;
    outline: none;
    border-radius: 5px;
    background: #6B0096;
    font-size: 20px;
    font-weight: 500;
    color: #FFF;
    padding: 0.8rem 0;
    cursor: pointer;
    flex-grow: 1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`
const EntrarComGoogle = styled(FcGoogle)`
    height: 33px;
    width: 33px;
    background-color: white;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`
const ParagrafoEsqueceuSenha = styled.p`
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 0px 0 60px 0;
`
const LinkRecuperarSenha = styled.a`
    text-decoration: underline;
    cursor: pointer;
    font-size: 13px;
`

// Inicialização da configuração do Firebase
/*const firebaseConfig = {
    apiKey: "AIzaSyCcv4PdY_YZH_wWjt3T7_lyRGhX3wrh6Z0",
    authDomain: "leve-book.firebaseapp.com",
    projectId: "leve-book",
    storageBucket: "leve-book.appspot.com",
    messagingSenderId: "406182333254",
    appId: "1:406182333254:web:d4d7b0f38a5dfc0e32b347"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);*/

function handleLogin(event) {
  event.preventDefault();
}

const LoginEntrar = ({atualizarModo}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("users");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, []);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
        });
      
        return () => unsubscribe();
      }, [auth]);

      // Adicione esta parte após o efeito de onAuthStateChanged
useEffect(() => {
    if (user) {
      localStorage.setItem("users", JSON.stringify(user));
    }
  }, [user]);
  

      // Adicione essa verificação onde você deseja atualizar as informações do usuário
useEffect(() => {
    if (user) {
      localStorage.setItem("users", JSON.stringify(user));
      setUser(user);
    }
  }, [user]);
  

    useEffect(() => {
      // Carregar o usuário armazenado no localStorage quando o componente for montado
      const storedUser = localStorage.getItem("users");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

    const navigate = useNavigate();

    const errorMessages = {
        "auth/user-not-found": "*Usuário não encontrado!",
        "auth/wrong-password": "*Senha inválida!",
        "auth/invalid-email": "*E-mail inválido!",
        "auth/missing-email": '*Preencha o campo de e-mail!',
        "auth/missing-password": '*Preencha o campo de senha!'
    };

     // Manipula a mudança no campo de email
     function onChangeEmail(event) {
      const value = event.target.value;
      setEmail(value);
  }

  // Manipula a mudança no campo de senha
  function onChangePassword(event) {
      const value = event.target.value;
      setPassword(value);
  }


 // Função para realizar o login
function login() {
  if (!email) {
      setEmailError(errorMessages["auth/missing-email"]);
      return; // Retorna para evitar tentar fazer login com um email nulo
  }

  if (!password) {
      setPasswordError(errorMessages["auth/missing-password"]);
      return; // Retorna para evitar tentar fazer login com uma senha nula
  }

  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("users", JSON.stringify(user));
          console.log("Login bem-sucedido. Redirecionando para a página inicial.");
          navigate("/");
      })
      .catch((error) => {
          console.error('Erro ao fazer login:', error);
      });
}

  // Função para recuperar a senha
    function recoverPassword() {
        if (!email) {
            alert('O campo de email precisa estar preenchido para recuperar a senha');
        } else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Enviamos um e-mail para você redefinir sua senha!");
                })
                .catch((error) => {
                    console.error("Erro ao enviar e-mail de redefinição de senha:", error);
                    alert("E-mail inválido", error);
                    setEmailError(errorMessages[error.code] || error.message);
                });
        }
    }

    // Função para realizar o login com o Google
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem("users", JSON.stringify(result.user));
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
            });
    }


    return (
      <>
      <div>
            <SetaVoltar onClick={() => atualizarModo("criar-conta")}/>
            <TituloEntrar>Bem-vindo de volta!</TituloEntrar>
            <FormEntrar onSubmit={handleLogin}>
                <LoginInputLabel
                    InputId="input-email-entrar"
                    InputType="email"
                    value={email}
                    onChange={onChangeEmail}
                >
                    E-mail
                </LoginInputLabel>
                <LoginInputLabel
                    InputId="input-senha-entrar"
                    InputType="password"
                    value={password}
                    onChange={onChangePassword}
                >
                    Senha
                </LoginInputLabel>
                <SectionSubmit>
                    <LoginFormSubmit
                        type="submit"
                        value="Entrar"
                        className="button"
                        id="login-button"
                        onClick={login}
                    />
                    <EntrarComGoogle type="button" onClick={signInWithGoogle} />
                </SectionSubmit>
            </FormEntrar>
            <ParagrafoEsqueceuSenha>
                Esqueceu a senha?{" "}
                <LinkRecuperarSenha onClick={recoverPassword}>Clique aqui</LinkRecuperarSenha>
            </ParagrafoEsqueceuSenha>
        </div>
      </>
    );
  };
  
  export default LoginEntrar;