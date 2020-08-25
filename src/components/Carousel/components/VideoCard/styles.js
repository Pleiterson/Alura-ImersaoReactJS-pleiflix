import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const VideoCardContainer = styled.a`
  /* border: 2px solid; // borda dos vídeos no carousel */
  /* border-radius: 4px; */
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 200px;
  width: 200px; /* tamanho da largura da caixa do vídeo no carousel */
  height: 120px; /* tamanho da altura da caixa do vídeo no carousel */
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  /* border-radius: 5px; */
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
