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
  border-color: ${variaveis.cinzaMedio};
  color: ${variaveis.cinzaMedio};
  background-color: ${variaveis.branco};
  padding: 8px;
  font-weight: bold;
  width: 100%;
`
