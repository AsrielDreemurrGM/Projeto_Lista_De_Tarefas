import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar React',
    decricao: 'Ver aula da EBAC',
    prioridade: 'Importante',
    status: 'Pendente'
  },
  {
    titulo: 'Iniciar o Projeto 5',
    decricao: 'Iniciar o projeto 5 da Aula da Ebac',
    prioridade: 'Importante',
    status: 'Concluído'
  },
  {
    titulo: 'Procurar Emprego',
    decricao: 'Monitorar no LinkedIn',
    prioridade: 'Urgente',
    status: 'Pendente'
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
