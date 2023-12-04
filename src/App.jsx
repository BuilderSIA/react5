import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useGlobalContext } from './context';
import { Cards, Err, Home, Login, MoreInfo, Navbar, Products, Profile, ProtectedRoute } from './components';

function App() {
  const {login} = useGlobalContext()
  return (
    <>
    <Navbar/>
<Routes>
    <Route path='*' element={ <Err/>}/>
    <Route path='/' element={<Home />}  />
    <Route path='cards' element={<Cards/>}/>
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
