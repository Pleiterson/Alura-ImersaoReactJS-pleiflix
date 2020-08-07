import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

// falta fazer rodar o link da imersao gamedev
const Pagina404 = () => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
  }}
  >
    <h1>Ops, quebrou tudo :O</h1>
    <p>
      <a href="/">Você pode jogar ou voltar pra home :)</a>
    </p>

    <iframe
      title="As Aventuras de Hipsta"
      src="https://editor.p5js.org/pleiterson/embed/1RMkKmkOm"
      width="1250"
      height="420"
    />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
