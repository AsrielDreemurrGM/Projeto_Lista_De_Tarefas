import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`

export default EstiloGlobal

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  border-radius: 8px;
  border: 2px solid ${variaveis.cinzaMedio};
  color: ${variaveis.cinzaMedio};
  background-color: ${variaveis.branco};
  padding: 8px;
  font-weight: bold;
  width: 100%;
`

export const Botao = styled.button`
  color: ${variaveis.branco};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinzaEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvarOuAdicionar = styled(Botao)`
  background-color: ${variaveis.verde};
`
