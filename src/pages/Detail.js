import React from 'react';
import { Modal, SafeAreaView } from  'react-native';
import { Carousel } from '../components/Carousel';

export const Detail = ({item, width, visible, onClose,scrollIndex}) => {

  return (
    <SafeAreaView>
        <Modal 
          onRequestClose={onClose}
          visible={visible}>
          <Carousel item={item} width={width} closeButton={onClose} scrollIndex={scrollIndex}/>
        </Modal>
    </SafeAreaView>
  );
};
