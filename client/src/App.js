import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LogIn from './Components/LogIn'
import PhoneVerify from './Components/PhoneVerify'
import SignUp from './Components/SignUp'
import DashBoard from './Components/DashBoard'



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/phone/verify' element={<PhoneVerify></PhoneVerify>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
