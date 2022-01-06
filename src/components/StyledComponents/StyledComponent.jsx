import styled from "styled-components";

export const Container = styled.div`
    margin: auto;

    align-items: center;
    justify-content: space-between;    
    background-color: blue;
    color: white;

    span {
        font-size: 25px;
        transition: .3s;
        &:hover {
            color: red;
            padding: 15px;
        }
    }

    @media (max-width: 500px){
        transition: .3s;
        background-color: green;
    }

`;
//*Para TypeScript* */ type BotaoProps = {
//     small?: Boolean;
// }
export const Botao = styled.button//<BotaoProps>
`
    cursor: pointer;
    font-size: ${(props) => props.small ? '15px' : '30px' };
`;
