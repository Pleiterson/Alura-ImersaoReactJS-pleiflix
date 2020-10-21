import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Projeto desenvolvido na
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>
        Repositório GitHub
        {' '}
        <a href="https://github.com/Pleiterson/imersao-reactjs-pleiflix">
          deste projeto
        </a>
      </p>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://www.linkedin.com/in/pleiterson/">
          Pleiterson Amorim
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
