import { Container, Botao } from '../StyledComponents/StyledComponent'

const TailwindComponent = () => {
    return (
        <Container className="flex flex-col md:flex-col">
          <span className='font-bold'>Utilização de Styled Components com tailwind</span>
          <Botao className="mt-10">Button 1</Botao>
          <div className="mt-10 m-3">
            <Botao small className="font-bold">
              Button 2
            </Botao>
          </div>
        </Container>
    );
}
export default TailwindComponent;