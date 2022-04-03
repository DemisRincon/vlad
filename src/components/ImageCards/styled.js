import styled from 'styled-components/native';
import { Footer } from '../Footer';

export const ContainerCards = styled.View`
  height: 100%;
  width:50%;
  padding: 0px;
  align-items: center;
  margin-top: ${({mt}) => mt ?? '0px'};
`