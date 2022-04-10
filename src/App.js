import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory'
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './Shipment/Shipment';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/shop' element={<Body />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment />
          </RequireAuth>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
