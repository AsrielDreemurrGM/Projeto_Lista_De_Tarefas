import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/TarefaEnums'

type FiltroState = {
  termo?: string
  criterio: 'Prioridade' | 'Status' | 'Todas'
  valor?: enums.Prioridades | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'Todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alteraFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alteraFiltro } = filtroSlice.actions

export default filtroSlice.reducer
