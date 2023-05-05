import logo from './logo.svg';
import { Link } from 'react-router-dom';

import './App.css';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import HomeScreen from './components/HomeScreen';
import React, { useState } from 'react';



// function App() {
//   return (
//     <div className="App">
//       {/* page = LoginScreen; */}
      
//       {/* <LoginScreen /> */}
//       {/* <SignupScreen /> */}
//       {/* <HomeScreen /> */}
//     </div>
//   );
// }

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      {currentPage === 'login' && <LoginScreen onPageChange={handlePageChange} />}
      {currentPage === 'home' && <HomeScreen onPageChange={handlePageChange} />}
    </div>
  );
}


export default App;
