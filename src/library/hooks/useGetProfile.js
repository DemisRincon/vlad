import {getUserProfile} from '../../services/HandleAPI';
import  {useState, useEffect} from 'react';

const useGetProfile = userName => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserProfile(setUser, userName);
  }, []);

  return user;
};
export default useGetProfile;
