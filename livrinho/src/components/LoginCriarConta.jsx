import { useState, useEffect } from "react";
import styled from "styled-components";
import LoginInputLabel from "components/LoginInputLabel";
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

// Firebase Authentication
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  setPersistence, 
  browserSessionPersistence, 
  onAuthStateChanged 
} from 'firebase/auth';

// Firebase Firestore
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

// Firebase Config
import { auth, firestore } from "../services/firebaseConfig";



// Estilos do título
const TituloCriarConta = styled.h1`
  font-family: var(--font-main);
  font-size: 40px;
  font-weight: 700;
  margin: 30px 0 0 0;
`;

// Estilos do formulário
const FormCriarConta = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px 0 0 0;
`;

// Estilos da seção de aceitar termos
const SectionAceitarTermos = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 4px;
`;

// Estilos do checkbox
const CheckboxAceitarTermos = styled.input`
  border: none;
  outline: none;
`;

// Estilos do label
const LabelAceitarTermos = styled.label`
  font-size: 17px;
  font-weight: 600;
`;

// Estilos da seção de submissão
const SectionSubmit = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 0 4%;
`;

// Estilos do botão de submissão
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
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

// Estilos do botão de login com o Google
const EntrarComGoogle = styled(FcGoogle)`
  height: 33px;
  width: 33px;
  background-color: white;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

// Estilos do parágrafo
const ParagrafoCriarConta = styled.p`
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 25px 0 60px 0;
`;

// Estilos do link "Entre"
const LinkEntre = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;


// Configuração do Firebase
/*const firebaseConfig = {
    apiKey: "AIzaSyCcv4PdY_YZH_wWjt3T7_lyRGhX3wrh6Z0",
    authDomain: "leve-book.firebaseapp.com",
    projectId: "leve-book",
    storageBucket: "leve-book.appspot.com",
    messagingSenderId: "406182333254",
    appId: "1:406182333254:web:d4d7b0f38a5dfc0e32b347"
  };

// Inicialização do Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);*/


export default function LoginCriarConta({ atualizarModo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    // Configurar persistência de autenticação para 'session'
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Observar mudanças no estado de autenticação
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
        });

        // Cleanup da função do useEffect
        return () => unsubscribe();
      })
      .catch((error) => {
        console.error("Erro ao configurar a persistência de autenticação:", error);
      });
  }, [auth]);
  
  // Função para lidar com o cadastro de usuário
  const handleRegister = async () => {
    try {
      const usersRef = collection(firestore, 'users');
      const querySnapshot = await getDocs(usersRef);
  
      const isUserExists = querySnapshot.docs.some((doc) => doc.data().email === email);
  
      if (isUserExists) {
        // Usuário já existe, emita um alerta ou faça o que for necessário
        alert("Este usuário já está cadastrado!");
        return;
      }
  
      // Crie o usuário na autenticação
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const token = await user.getIdToken();

          // Armazene informações no localStorage
          localStorage.setItem("@AuthFirebase:token", token );
          localStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
          localStorage.setItem("@AuthFirebase:userDisplayName", name);

      // Adicione dados ao Firestore
      const userRef = collection(firestore, 'users');
      const newUserDoc = {
        name: name, // Nome do usuário
        email: user.email,
      };
      const docRef = await addDoc(userRef, newUserDoc);
      navigate("/")
  
    } catch (error) {
      console.error(error);
      alert("Desculpe, houve um erro durante o cadastro");
    }
  };
  

  // Função para lidar com o login com o Google
  function signUpWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  return (
    <>    
    <div>
      <TituloCriarConta>Criar conta</TituloCriarConta>
      <FormCriarConta onSubmit={(e) => {
  e.preventDefault(); // Evita a recarga da página quando o formulário é submetido
  handleRegister();}}>
        <LoginInputLabel
          InputId='input-nome-criar-conta'
          InputType='text'
          onChange={(e) => setName(e.target.value)}>
          Nome
        </LoginInputLabel>
        <LoginInputLabel
          InputId='input-email-criar-conta'
          InputType='email'
          onChange={(e) => setEmail(e.target.value)}>
          E-mail
        </LoginInputLabel>
        <LoginInputLabel
          InputId='input-senha-criar-conta'
          InputType='password'
          onChange={(e) => setPassword(e.target.value)}>
          Senha
        </LoginInputLabel>
        <SectionAceitarTermos>
          <CheckboxAceitarTermos type='checkbox' id='check-box' />
          <LabelAceitarTermos
            htmlFor='check-box'>
            Concordo com os Termos e condições
          </LabelAceitarTermos>
        </SectionAceitarTermos>
        <SectionSubmit>
          <LoginFormSubmit type='submit' value='Prosseguir' />
          <EntrarComGoogle type="button" onClick={signUpWithGoogle} />
        </SectionSubmit>
      </FormCriarConta>
      <ParagrafoCriarConta>Já possui uma conta? <LinkEntre onClick={() => atualizarModo('entrar')}>Entre</LinkEntre></ParagrafoCriarConta>
    </div>
    </>
  );
  
}

