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
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com este nome.')
      } else {
        state.itens.push(action.payload)
      }
    },
    alterarStatus: (
      state,
      action: PayloadAction<{ id: number; concluido: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.concluido
          ? enums.Status.CONCLUIDO
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, adicionar, alterarStatus } =
  tarefasSlice.actions

export default tarefasSlice.reducer
