import axios from 'axios';

const authenticate = async () => {
  try {
    const response = await axios.get('/api/users/currentuser', {
      headers: {
        authorization: localStorage.token,
      },
    });
    console.log('Response: ', response);
    if (response.data.currentUser) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};

export default authenticate;
