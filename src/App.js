import React from 'react';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Layout from './components/Layout';


function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  

  return (
    <>
      {isLoggedIn ? <Layout /> : <Auth/>}
      
      
    </>
    
        
  );
}

export default App;
