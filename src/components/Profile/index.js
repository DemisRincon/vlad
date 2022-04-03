import React from 'react';
import {ActivityIndicator} from 'react-native';
import {LayoutAbsolute} from '../syled';

import {FloatingButton} from '../FloatingButton';
import {ProfileContainer} from './styled';
import useGetProfile from '../../library/hooks/useGetProfile';

export const Profile = ({item, closeButton, userName}) => {
  const user = useGetProfile(userName);

  return (
    <LayoutAbsolute>
      <FloatingButton name="close" closeButton={closeButton} />
      {user ? (
        <ProfileContainer
          clrTitle="#000"
          clrText="#000"
          title={user.username}
          img={user.profile_image && user.profile_image.large}
          text={user.bio}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </LayoutAbsolute>
  );
};
