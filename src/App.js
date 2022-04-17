import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Service from './component/Service/Service';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Checkout from './component/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
      </Routes>
    </div>
  );
}

export default App;
