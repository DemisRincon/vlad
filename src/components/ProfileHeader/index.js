import React from 'react';

import { TouchableOpacity ,Text} from 'react-native';
import { ContainerProfileHeader, ProfileImg, ProfileText } from './styled'
import { ProfileModal } from '../../pages/ProfileModal';
import { CustomImage, CustomText } from '../syled';

export const ProfileHeader = ({
    title,
    clrTitle,
    text,
    clrText,
    h,
    hProfile,
    wProfile,
    wProfileText,
    hProfileText,
    fzTitle, 
    fwTitle, 
    fzSubTitle, 
    fwSubTitle, 
    op,
    position,
    top,
    alnProfile,
    wContainerProfile,
    paddingH,
    img,
    onPress}) => {

  return (
    <ContainerProfileHeader 
      position={position} 
      t={top}
      h={h}
      w={wContainerProfile}
      aln={alnProfile}
      ph={paddingH}>

      <ProfileImg w={wProfile} h={hProfile}>

        <CustomImage 
          // source={require('../images/t1.jpg')}
          source={{uri: img}}
          br='50px'/>
      </ProfileImg>
      <ProfileText 
        h={hProfileText}
        w={wProfileText}>
        <CustomText 
          fz={fzTitle} 
          fw={fwTitle}
          clr={clrTitle}>
            {title}
        </CustomText>
        <TouchableOpacity
          onPress={onPress}
          >
           <CustomText 
            fz={fzSubTitle} 
            fw={fwSubTitle} 
            op={op}
            clr={clrText}>
              {text}
          </CustomText>
        </TouchableOpacity>
      </ProfileText>
    </ContainerProfileHeader>

  )
}
