import { useEffect, useState } from 'react';
import './App.css'
import Login from './components/Login';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Err from './components/err';
import { getStore } from './Utilits';
import { uid } from 'uid';
import Edit from './components/Edit';




const img = 'https://picsum.photos/id/237/200/300';
const getUser = getStore('user')
const getProduct = getStore('Product')





function App() {
  const [login, setLogin] = useState(false)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [psw,setPsw] = useState('')
  const [user,setUser] = useState(getUser)
  const [pname,setPname] = useState('')
  const [price,setPrice] = useState('')
  const [allProd,setAllprod] = useState(getProduct)
  const [id,setId] = useState('')
  const [editId,setEditId] = useState('')




  const handSignIn = () =>{
    const newUser = {name: name, password: psw};
    setUser(newUser)
  }
  const handProd = () =>{
    const newProd = { id:id, name:pname,price:price}
    setAllprod([...allProd , newProd])
  }
  const deleteProd = (id) =>{
    const newProds = allProd.filter((item)=> item.id !== id);
    setAllprod(newProds)
  }
  const handEditId=(id) =>{
    setEditId(id);
    editProd(id)
    // const item = document.querySelector('.prodCont');
    // const item2 = document.querySelector('.prodTitle');
    // item.style.display = 'none'
    // item2.style.display = 'none'
  }
  const editProd = (id) =>{
    const oldProds = allProd.filter((item)=> item.id !== id);
    const newProd = allProd.filter((item)=> item.id === id);
    setAllprod(newProd)
  }


  useEffect(()=>{
    // e.preventDeafult()
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('product',JSON.stringify(allProd))
  },[user,allProd])

  return (
    <>
      <Navbar login={login} setLogin={setLogin} name={name} setName={setName} user={user} />
      { login ? <Login login={login} setLogin={setLogin} name={name} setName={setName} psw={psw} setPsw={setPsw} handSignIn={handSignIn} /> : <Err name={name} user={user} />}
      { user.name ? <Products handEditId={handEditId} setId={setId} deleteProd={deleteProd} id={id} pname={pname} setPname={setPname} price={price} setPrice={setPrice} allProd={allProd} setAllprod={setAllprod} handProd={handProd} /> : <Err name={name} user={user} />}
    </>
  )
}

export default App
