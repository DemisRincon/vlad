import styled from 'styled-components/native';

export const ContainerProfileHeader = styled.View`
`;

export const ProfileImg = styled.View`
  width: ${({w}) => w ?? '37px'};
  height: ${({h}) => h ?? '37px'};
  display: flex;
  flex-direction: row;
`;

export const ProfileText = styled.View`
  width: ${({w}) => w ?? '88%'};
  height: ${({h}) => h ?? '37px'};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
