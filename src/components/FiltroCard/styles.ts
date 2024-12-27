import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
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
