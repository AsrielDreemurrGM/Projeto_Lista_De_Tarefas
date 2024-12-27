import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remover, editar, alterarStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvarOuAdicionar } from '../../styles'

import * as enums from '../../utils/enums/TarefaEnums'

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function alterarStatusDaTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alterarStatus({
        id,
        concluido: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDO}
          onChange={alterarStatusDaTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag $parametro="Prioridade" $prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag $parametro="Status" $status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraDeAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvarOuAdicionar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    id,
                    prioridade,
                    titulo,
                    status
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvarOuAdicionar>
            <S.BotaoRemoverOuCancelar
              onClick={() => {
                cancelarEdicao()
              }}
            >
              Cancelar
            </S.BotaoRemoverOuCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoRemoverOuCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemoverOuCancelar>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Tarefa
