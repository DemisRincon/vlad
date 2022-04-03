import React from 'react'
import { ButtonContainer } from './styled'
import Icon from 'react-native-vector-icons/Ionicons';

export const FloatingButton = ({left, name, top, closeButton}) => {
  return (
    <ButtonContainer 
      onPress={(closeButton)}
      l={left} 
      t={top}>
      <Icon name={name} size={40} color='black' />
    </ButtonContainer>
  )
}
