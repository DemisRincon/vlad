import React, {useEffect, useState} from 'react';
import {colors} from '../library/colors';
import {ImageCards} from '../components/ImageCards';
import {getPhotoFromApi} from '../services/HandleAPI';
import {FloatingButton} from '../components/FloatingButton';
import {Layout, FlexContainer, CustomText} from '../components/syled';

export const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotoFromApi(setPhotos);
  }, []);
  return (
    <Layout pb="0">
      <FlexContainer h="15%">
        <FloatingButton name="reorder-two-sharp" left="0px" top="30px" />
        <CustomText fz="24px" fw="bold" clr={colors.black}>
          Discover
        </CustomText>
      </FlexContainer>
      <FlexContainer h="85%" jc="space-between">
        <ImageCards item={photos} />
      </FlexContainer>
    </Layout>
  );
};
