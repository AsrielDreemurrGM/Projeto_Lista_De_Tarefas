import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvarOuAdicionar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/TarefaEnums'
import Tarefa from '../../models/Tarefa'
import { adicionar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridades.NORMAL)

  const AdicionarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaAAdicionar = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      4
    )

    dispatch(adicionar(tarefaAAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={AdicionarTarefa}>
        <Campo
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da Tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridades).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                id={prioridade}
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridades)
                }
                defaultChecked={prioridade === enums.Prioridades.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvarOuAdicionar type="submit">
          Adicionar Tarefa
        </BotaoSalvarOuAdicionar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
