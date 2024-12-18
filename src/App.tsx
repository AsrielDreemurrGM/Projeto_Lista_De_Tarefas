import BarraLateral from './containers/BarraLateral'
import ListaDetarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDetarefas />
      </Container>
    </>
  )
}

export default App
