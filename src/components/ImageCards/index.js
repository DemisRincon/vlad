import React,{useState} from 'react';
import {ContainerCards} from './styled';
import {SafeAreaView, FlatList} from 'react-native';
import {Cards} from '../Cards';
import {Footer} from '../Footer';
import {Dimensions} from 'react-native';
import {Detail} from '../../pages/Detail';

export const ImageCards = ({item, onPress}) => {
  const {width} = Dimensions.get('window');

  const [modalVisible, setModalVisible] = useState(false);
  const [scrollIndex,setScrollIndex]=useState(null)
  const handelPress = (index) => {
    setModalVisible(true);
    setScrollIndex(index)
  };
  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        data={item}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ContainerCards jc="flex-start" mt={index % 2 === 0 ? '0px' : '30px'}>
            <Cards item={item} onPress={handelPress} />
            <Footer
              fzTitle="12px"
              fzSubtitle="8px"
              title="Tranquilidad Marina"
              text="200 Votos"
            />
          </ContainerCards>
        )}
      />
      <Detail
        onClose={() => {
          setModalVisible(false);
        }}
        visible={modalVisible}
        width={width}
        item={item}
        scrollIndex={scrollIndex}
      />
    </SafeAreaView>
  );
};
