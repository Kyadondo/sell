// src/utils/signOut.js
import { useHistory } from 'react-router-dom';

const signOut = () => {
  // Clear authentication tokens or user data
  localStorage.removeItem('authToken'); // Assuming you're using local storage
  // Redirect to login page or home page
  window.location.href = '/signin'; // You can also use history.push if inside a component
};

export default signOut;
