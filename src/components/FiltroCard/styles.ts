import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  $ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  color: ${(props) =>
    props.$ativo ? variaveis.azul : variaveis.cinzaIntermediario};
  background-color: ${(props) =>
    props.$ativo ? variaveis.branco : variaveis.offWhite};
  border: 1px solid
    ${(props) => (props.$ativo ? variaveis.azul : variaveis.cinzaMedio)};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.label`
  font-size: 14px;
  cursor: pointer;
`
