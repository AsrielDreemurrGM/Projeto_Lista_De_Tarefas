import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/TarefaEnums'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar React',
      enums.Prioridades.IMPORTANTE,
      enums.Status.PENDENTE,
      'Ver aula da EBAC',
      1
    ),
    new Tarefa(
      'Iniciar o Projeto 5',
      enums.Prioridades.IMPORTANTE,
      enums.Status.CONCLUIDO,
      'Iniciar o projeto 5 da Aula da Ebac',
      2
    ),
    new Tarefa(
      'Procurar Emprego',
      enums.Prioridades.URGENTE,
      enums.Status.PENDENTE,
      'Monitorar no LinkedIn',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
