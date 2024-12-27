import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.offWhite};
  height: 100vh;
`

export const Filtros = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

export const Buscar = styled.input`
  border-radius: 8px;
  border-color: ${variaveis.cinzaMedio};
  color: ${variaveis.cinzaMedio};
  background-color: ${variaveis.branco};
  padding: 8px;
  font-weight: bold;
  width: 100%;
`
