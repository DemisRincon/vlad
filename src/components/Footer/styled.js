import styled from 'styled-components/native';

export const Description = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  padding: ${({p}) => p ?? '10px'};
  height: ${({h}) => h ?? '52px'};
  width: ${({w}) => w ?? '151px'};
  border-bottom-right-radius: ${({borderRadiusR}) => borderRadiusR ?? '10px'};
  border-bottom-left-radius: ${({borderRadiusL}) => borderRadiusL ?? '10px'};
`;
