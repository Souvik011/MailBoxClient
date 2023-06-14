import {useEffect} from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Welcome from './Auth/Welcome';
import SignUp from './Auth/SIgnUp';
import LogIn from './Auth/LogIn';
import { useDispatch } from 'react-redux';
import { AuthAction } from './store/AuthSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    const useremail = localStorage.getItem("usermail");
    const idToken = localStorage.getItem("idToken");
    dispatch(AuthAction.initialRander({useremail:useremail,idToken:idToken}));
  },[dispatch])
  return (<div className='Login-component'>
    <Routes>
      <Route path='/' element={<Welcome/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<LogIn />} />

    </Routes>
  </div>);
}

export default App;
