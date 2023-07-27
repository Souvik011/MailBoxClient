import {useEffect} from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Welcome from './Auth/Welcome';
import SignUp from './Auth/SIgnUp';
import LogIn from './Auth/LogIn';
import Compose from './Compose/Compose';
import Inbox from './Inbox/Inbox';
import InboxMsgView from './Inbox/InboxMsgView';
import SendBox from './SendBox/SendBox';
import SendBoxMsgView from './SendBox/SendBoxMsgView';
import WelcomePage from './Auth/WelcomePage';
import { useDispatch , useSelector} from 'react-redux';
import { AuthAction } from './store/AuthSlice';
import ForgetPassword from './Auth/ForgetPassword';

function App() {
  const dispatch = useDispatch();
  const islogin  = useSelector((state)=> state.auth.islogin);
  useEffect(()=> {
    const useremail = localStorage.getItem("usermail");
    const idToken = localStorage.getItem("idToken");
    dispatch(AuthAction.initialRander({useremail:useremail,idToken:idToken}));
  },[dispatch])
  return (<div className='Login-component'>
    <Routes>
      {islogin ? (<Route path='/' element={<WelcomePage/>} />) :(<Route path='/' element={<Welcome/>}/>) }
      {islogin ? (<Route path='/signUp' element={<WelcomePage/>} />) :(<Route path='/signup' element={<SignUp/>} />) }
      {islogin ? (<Route path='/login' element={<WelcomePage/>} />) :(<Route path='/login' element={<LogIn />} />) }
      <Route path='/forget' element={<ForgetPassword />} />
      {islogin ? (<Route path='/compose' element={<Compose />}/>) :(<Route path='/' element={<Welcome/>}/>)}
      {islogin ? (<Route path='/inboxpage' element={<Inbox />}/>) :(<Route path='/' element={<Welcome/>}/>)}
      {islogin ? (<Route path="/inboxpage/:messageId" element={<InboxMsgView/>} />) :(<Route path='/' element={<Welcome/>}/>)}
      {islogin ? (<Route path='/sendbox' element={<SendBox />}/>) :(<Route path='/' element={<Welcome/>}/>)}
      {islogin ? (<Route path="/sendbox/:messageId" element={<SendBoxMsgView/>} />) :(<Route path='/' element={<Welcome/>}/>)}
      
      

    </Routes>
  </div>);
}

export default App;
