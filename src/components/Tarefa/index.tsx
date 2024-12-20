import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraDeAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemoverOuCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoRemoverOuCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemoverOuCancelar>Remover</S.BotaoRemoverOuCancelar>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Tarefa
