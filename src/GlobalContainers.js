import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'flex-start'};
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'normal'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
`;

export const InputContainer = styled.input.attrs(props => ({
    type: 'text' || props.type,
}))`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  outline: none;
  border: none;
`;

export const ButtonContainer = styled.button`
  outline: none;
  border: none;
  color: ${props => props.color || ''};
  background-color: ${props => props.bgColor || ''};
  &:hover {
    cursor: pointer;
  }
`;