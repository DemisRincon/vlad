const ACCESS_KEY= 'Tpjrm5uu077VCvmz-HnTYxyq_suIZgSjcdUd8scqhQU';

export const getPhotoFromApi = async (setPhotos) => {
  try {
    const response = await fetch(
      'https://api.unsplash.com/photos?page=1&per_page=20&client_id='+ACCESS_KEY
    );
    const json = await response.json();
    setPhotos(json);
  } catch (error) {
    console.error(error);
  }
};

export const getUserProfile = async (setUser, user) => {

  try {
    const response = await fetch(
      `https://api.unsplash.com/users/${user}?client_id=${ACCESS_KEY}`
    );
    const json = await response.json();
    setUser(json);
 
  } catch (error) {
    console.log(error)
  }
}

