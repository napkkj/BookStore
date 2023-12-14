import imagemLivro from '../images/LivroTeste.jpeg'
import {livros} from '../services/puxarLivros.mjs'

class LivrosContent {
    constructor(categoriaAtual, pathname, livros) {
        this.categoriaAtual = categoriaAtual
        this.links = ['Home', ...gerarListaLinks(pathname)]
        this.livros = livros
    }
}

function primeiraLetraMaiuscula(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const gerarListaLinks = (pathname) => {
    let resultado = pathname.split('/')
    resultado = resultado.filter(link => link !== '');
    resultado = resultado.map(primeiraLetraMaiuscula);
    return resultado
}

export const obterLivrosContent = (pathname) => {
    pathname = pathname.replace(/\/+$/, '');
    switch (pathname) {

        case '/livros/fantasia':
            return new LivrosContent('Fantasia', pathname, livros.filter(livro => livro.Gênero === 'Fantasia'));

        case '/livros/ficcao':
            return new LivrosContent('Ficção', pathname, livros.filter(livro => livro.Gênero === 'Ficção'));

        case '/livros/receitas':
            return new LivrosContent('Receitas', pathname, livros.filter(livro => livro.Gênero === 'Receitas'));

        case '/livros/religiao':
            return new LivrosContent('Religião', pathname, livros.filter(livro => livro.Gênero === 'Religião'));

        case '/livros/romances':
            return new LivrosContent('Romances', pathname, livros.filter(livro => livro.Gênero === 'Romance'));

        case '/livros/terror':
            return new LivrosContent('Terror', pathname, livros.filter(livro => livro.Gênero === 'Terror'));
        
        default:
            return new LivrosContent('Livros', pathname, livros);
    }
};

