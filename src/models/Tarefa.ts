import * as enums from '../utils/enums/TarefaEnums'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridades
  status: enums.Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.Prioridades,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
