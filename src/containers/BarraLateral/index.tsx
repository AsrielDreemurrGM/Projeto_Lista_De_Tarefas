import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import * as enums from '../../utils/enums/TarefaEnums'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Buscar
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="Status"
            legenda="Pendentes"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDO}
            criterio="Status"
            legenda="Concluídas"
          />
          <FiltroCard
            valor={enums.Prioridades.URGENTE}
            criterio="Prioridade"
            legenda="Urgentes"
          />
          <FiltroCard
            valor={enums.Prioridades.IMPORTANTE}
            criterio="Prioridade"
            legenda="Importantes"
          />
          <FiltroCard
            valor={enums.Prioridades.NORMAL}
            criterio="Prioridade"
            legenda="Normal"
          />
          <FiltroCard criterio="Todas" legenda="Todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
