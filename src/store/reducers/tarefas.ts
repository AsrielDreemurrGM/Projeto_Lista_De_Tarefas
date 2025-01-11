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
      titulo: 'Experimente Criar Uma Nova Tarefa',
      prioridade: enums.Prioridades.NORMAL,
      status: enums.Status.CONCLUIDO,
      descricao:
        'Você pode criar novas tarefas através do botão de adição verde localizado no canto inferior direito da tela.'
    },
    {
      id: 2,
      titulo: 'Tente Concluir Esta Tarefa',
      prioridade: enums.Prioridades.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Clique no título de uma tarefa para concluí-la.'
    },
    {
      id: 3,
      titulo: 'Marque Esta Tarefa Como Pendente',
      prioridade: enums.Prioridades.URGENTE,
      status: enums.Status.CONCLUIDO,
      descricao:
        'Clique no título de uma tarefa concluída para alterar para pendente.'
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
    adicionar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com este nome.')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
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
