import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Projeto desenvolvido na Imersão React da
        {' '}
        <a target="_blank" href="https://www.alura.com.br/" rel="noopener noreferrer">
          Alura
        </a>
      </p>
      <p>
        Repositório
        {' '}
        <a target="_blank" href="https://github.com/Pleiterson/imersao-reactjs-pleiflix" rel="noopener noreferrer">
          GitHub
        </a>
        {' '}
        deste projeto
      </p>
      <p>
        Desenvolvido por
        {' '}
        <a target="_blank" href="https://pleiterson.vercel.app" rel="noopener noreferrer">
          Pleiterson Amorim
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
