import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Checkout from './Checkout';
import LogIn from './LogIn';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';



function App() {
  const  [{},dispatch] = useStateValue();

  useEffect(() => {
   auth.onAuthStateChanged(authUser => {
    console.log('The User is >>>', authUser);

    if(authUser) {
      //user logged in/was logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      }) 
    }else {
      //the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
   })
  }, [])
  return (
   <BrowserRouter>
    
    <div className="App">
      <Routes>
      <Route path='/Login' element={<LogIn />}/>
      <Route path='/checkout' element={[<Header/>,<Checkout/>]}/>
      <Route path='/'  element={[<Header/>,<Home/>]} /> 
      
      </Routes>
     
    </div>
    
    </BrowserRouter>
   
  );
}

export default App;
