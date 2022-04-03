import styled from 'styled-components/native';
import {colors} from '../library/colors';

export const Layout = styled.View`
  background-color: ${colors.white};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding-top: ${({pt}) => pt ?? '25px'};
  padding-bottom: ${({pb}) => pb ?? '25px'};
  padding-left: ${({pl}) => pl ?? '25px'};
  padding-right: ${({pr}) => pr ?? '25px'};
`;
export const LayoutAbsolute = styled(Layout)`
  position: absolute;
  z-index: 99;
`;

export const FlexContainer = styled.View`
  background-color: ${({bg}) => bg ?? 'transparent'};
  height: ${({h}) => h ?? '100%'};
  width: ${({w}) => w ?? '100%'};
  display: flex;
  align-items: ${({aln}) => aln ?? 'center'};
  justify-content: ${({jc}) => jc ?? 'space-around'};
  flex-direction: ${({dir}) => dir ?? 'column'};
  margin-top: ${({mt}) => mt ?? '0px'};
`;

export const CustomText = styled.Text`
  color: ${({clr}) => clr ?? 'white'};
  font-size: ${({fz}) => fz ?? '20px'};
  font-weight: ${({fw}) => fw ?? 'normal'};
  margin-bottom: ${({mb}) => mb ?? '0px'};
  margin-top: ${({mt}) => mt ?? '0px'};
  margin-left: ${({ml}) => ml ?? '0px'};
  margin: ${({mh}) => mh ?? 'auto 0'};
  text-align: ${({aln}) => aln ?? 'left'};
  opacity: ${({op}) => op ?? '1'};
`;

export const CustomImage = styled.Image`
  background-color: ${({bg}) => bg ?? 'transparent'};
  flex: ${({f}) => f ?? '1'};
  width: ${({w}) => w ?? 'null'};
  height: ${({h}) => h ?? 'null'};
  border-radius: ${({br}) => br ?? '10px'};
`;

export const WrapperFlex = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
