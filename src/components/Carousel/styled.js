import styled from 'styled-components/native';

export const ContainerCarousel = styled.SafeAreaView`
  flex:1;
  height: 100%;
`;

export const ImageCarousel = styled.Image`
  height: ${({h}) => h ?? '100%'};
  width: ${({w}) => w ?? '100%'};
  resize-mode: contain;
`;
