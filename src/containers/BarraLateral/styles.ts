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
