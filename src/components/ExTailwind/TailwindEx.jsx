import { Container, Botao } from '../StyledComponents/StyledComponent'

const TailwindComponent = () => {
    return (
        <Container className="flex flex-col md:flex-row">
          <span>Utilização de Styled Components com tailwind</span>
          <Botao className="mt-10">Botão maior</Botao>
          <div className="bg-black mt-10">
            <Botao small className="font-bold">
              Botão menor
            </Botao>
          </div>
        </Container>
    );
}
export default TailwindComponent;