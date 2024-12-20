import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import * as enums from '../../utils/enums/TarefaEnums'

const tarefas = [
  {
    titulo: 'Estudar React',
    decricao: 'Ver aula da EBAC',
    prioridade: enums.Prioridades.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Iniciar o Projeto 5',
    decricao: 'Iniciar o projeto 5 da Aula da Ebac',
    prioridade: enums.Prioridades.IMPORTANTE,
    status: enums.Status.CONCLUIDO
  },
  {
    titulo: 'Procurar Emprego',
    decricao: 'Monitorar no LinkedIn',
    prioridade: enums.Prioridades.URGENTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDetarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.decricao}
            status={t.status}
            titulo={t.titulo}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDetarefas
