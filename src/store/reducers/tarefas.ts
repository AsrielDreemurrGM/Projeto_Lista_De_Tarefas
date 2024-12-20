import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/TarefaEnums'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Ver aula da EBAC',
      prioridade: enums.Prioridades.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar React'
    },
    {
      id: 2,
      descricao: 'Iniciar o projeto 5 da Aula da Ebac',
      prioridade: enums.Prioridades.IMPORTANTE,
      status: enums.Status.CONCLUIDO,
      titulo: 'Iniciar o Projeto 5'
    },
    {
      id: 3,
      descricao: 'Monitorar no LinkedIn',
      prioridade: enums.Prioridades.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Procurar Emprego'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
