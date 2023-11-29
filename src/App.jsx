import './App.css';
import Login from './components/Login';
import Navbar from './components/navbar';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import MoreInfo from './components/moreInfo';
import { useGlobalContext } from './context';

function App() {
  const {login} = useGlobalContext()
  return (
    <>
    <Navbar/>
<Routes>
    <Route path='/' element={<Home />}  />
      <Route path='login' element={ login ? <Login/> : < Profile/>}/>  
      <Route path=':id' element={<MoreInfo/>} />
      <Route path='products' element={
      <ProtectedRoute>
                <Products/>
      </ProtectedRoute>
      } />
    </Routes>
    </>
  )
  }

export default App
