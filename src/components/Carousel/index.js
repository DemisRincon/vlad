import React, {useState} from 'react';
import {ScrollView, ImageBackground} from 'react-native';
import {ProfileModal} from '../../pages/ProfileModal';
import {ContainerCarousel} from './styled';
import {FloatingButton} from '../FloatingButton';
import {Footer} from '../Footer';
import {ProfileHeader} from '../ProfileHeader';
import {WrapperFlex} from '../syled';
import {useRef,useEffect} from 'react';

export const Carousel = ({item, width, closeButton,scrollIndex}) => {
 
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState('');

  return (
    <ContainerCarousel>
      <ScrollView horizontal pagingEnabled 
      
      >
        {item.map((img, index) => {
          return (
            <ImageBackground
              key={index}
              style={{flex: 1, width}}
              // source={require('../images/t1.jpg')}
              source={{uri: img.urls.full}}>
              <WrapperFlex>
                <FloatingButton
                  name="close-circle-outline"
                  closeButton={closeButton}
                />
                <Footer
                  h="225px"
                  w="100%"
                  top="510px"
                  fzTitle="42px"
                  fzSubtitle="14px"
                  title={img.user.username}
                  text={img.likes}
                  borderRadiusR="0px"
                  borderRadiusL="0px">
                  <ProfileHeader
                    onPress={() => {
                      setModalVisible(true);
                      setUser(img.user.username);
                    }}
                    fzTitle="12px"
                    fwTitle="bold"
                    fzSubTitle="10px"
                    fwSubTitle="bold"
                    op="0.5"
                    title={img.user.name}
                    text="View Profile"
                    wContainerProfile="100%"
                    paddingH="10px"
                    img={img.user.profile_image.small}
                  />
                </Footer>
              </WrapperFlex>
            </ImageBackground>
          );
        })}
      </ScrollView>
      <ProfileModal
        onClose={() => {
          setModalVisible(false);
        }}
        visible={modalVisible}
        item={item}
        user={user}
      />
    </ContainerCarousel>
  );
};
