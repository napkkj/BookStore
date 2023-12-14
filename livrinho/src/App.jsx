// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Paginas
import Home from 'pages/Home';
import Login from 'pages/Login';
import Favoritos from 'pages/Favoritos'
import Livros from 'pages/Livros';
import Popup from 'pages/HomePopup';
// Componentes
import livrosConfig from './routes/livrosConfig.json'


export default function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='popup' element={<Popup />} />
          <Route path='favoritos' element={<Favoritos />} />
          
          <Route path='livros' element={<Livros/>}>
            {livrosConfig.map( rota => (
              <Route path={rota.path}  element={<Livros />} />
            ))}
          </Route>


          <Route path='popup' element={<Popup/>}>
            {livrosConfig.map( rota => (
              <Route path={rota.path}  element={<Popup />} />
            ))}
          </Route>

          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}