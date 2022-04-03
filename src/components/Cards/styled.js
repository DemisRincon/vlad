import styled from 'styled-components/native';

export const CustomCards = styled.View`
  height: ${({h}) => h ?? '218px'};
  width: ${({w}) => w ?? '151px'};
  border-radius: ${({br}) => br ?? '10px'};
  display: flex;
  align-content: flex-end;
`;
