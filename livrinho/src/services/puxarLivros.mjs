import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcv4PdY_YZH_wWjt3T7_lyRGhX3wrh6Z0",
  authDomain: "leve-book.firebaseapp.com",
  projectId: "leve-book",
  storageBucket: "leve-book.appspot.com",
  messagingSenderId: "406182333254",
  appId: "1:406182333254:web:d4d7b0f38a5dfc0e32b347"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function obterLivrosPorColecao(colecao) {
  const todosLivros = {
    todos: []
  };

  for (const nomeColecao of colecao) {
    const snapshot = await getDocs(collection(db, nomeColecao));

    const livrosColecao = snapshot.docs.map((doc) => {
      const livroData = doc.data();
      const livroFormatado = {
        
        ...livroData,
      };

      return livroFormatado;
    });

    todosLivros.todos = todosLivros.todos.concat(livrosColecao);
  }

  return todosLivros;
}

// Exemplo de uso
async function main() {
  const colecoes = ['Fantasia', 'Terror', 'Receitas', 'Religião', 'Romances', 'Ficção'];
  const todosLivros = await obterLivrosPorColecao(colecoes);

}

main();

const todosLivros = await obterLivrosPorColecao(['Fantasia', 'Terror', 'Receitas', 'Religião', 'Romances', 'Ficção']);
export const livros = todosLivros.todos