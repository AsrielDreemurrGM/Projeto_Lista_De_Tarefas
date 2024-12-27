import { BotaoSalvarOuAdicionar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes } from './styles'

const Formulario = () => (
  <MainContainer>
    <Titulo>Nova Tarefa</Titulo>
    <Form>
      <Campo type="text" placeholder="Título" />
      <Campo as="textarea" placeholder="Descrição da Tarefa" />
      <Opcoes>
        <p>Prioridade</p>
        <input name="prioridade" type="radio" id="Urgente" />
        <label htmlFor="Urgente">Urgente</label>
        <input name="prioridade" type="radio" id="Importante" />
        <label htmlFor="Importante">Importante</label>
        <input name="prioridade" type="radio" id="Normal" />
        <label htmlFor="Normal">Normal</label>
      </Opcoes>
      <BotaoSalvarOuAdicionar type="submit">
        Adicionar Tarefa
      </BotaoSalvarOuAdicionar>
    </Form>
  </MainContainer>
)

export default Formulario
