import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


//falta fazer rodar o link da imersao gamedev
const Pagina404 = () => (
  <div>
    <h1>Página não encontrada</h1>
    <iframe
      title="As Aventuras de Hipsta"
      src="https://editor.p5js.org/pleiterson/embed/1RMkKmkOm"
      width="1280"
      height="450" />
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);