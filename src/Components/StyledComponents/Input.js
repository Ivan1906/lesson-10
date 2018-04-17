import styled from 'styled-components';

const Input = styled.input.attrs({
    type: props => props.type
})`
    font-size: 14px;
    padding: 5px;
    margin: 5px;
    background: ${props => props.bgColor ? props.bgColor : 'darkorange'};
    color: ${props => props.txtColor ? props.txtColor : 'black'};
    width: ${props => props.width ? props.width : '100%'};
    border: '1px solid gray';
    border-radius: ${props => props.radius ? '30px' : '0'}
`
export default Input;