import React from 'react';
import { Modal, SafeAreaView } from  'react-native';
import { Profile } from '../components/Profile';

export const ProfileModal = ({item, visible, onClose, user}) => {
  return (

          <Modal 
            animationType='fade'
            onRequestClose={onClose}
            visible={visible}>
            <Profile closeButton={onClose} item={item} userName={user}/>
          </Modal>

  );
};
