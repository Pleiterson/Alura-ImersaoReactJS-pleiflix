import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


//falta fazer rodar o link da imersao gamedev
const Pagina404 = () => (<link href="https://editor.p5js.org/pleiterson/full/1RMkKmkOm" />)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  /*<React.StrictMode>
    <Home />
  </React.StrictMode>,*/
  document.getElementById('root')
);