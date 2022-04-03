import React from 'react';
import { TouchableOpacity } from 'react-native';
import {CustomCards} from './styled';
import { CustomImage } from '../syled';

export const Cards = ({
  wImg, 
  hImg,
  radius,
  item,
  onPress
  }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomCards 
        h={hImg} 
        w={wImg} 
        br={radius}>
        <CustomImage 
          source={{
            uri: item && item.urls.full || 'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
          }}
          // source={require('../images/t1.jpg')}
          br={radius}
        />
      </CustomCards>
    </TouchableOpacity>
  );
};
