import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/navbar';
import Products from './components/Products';
import Err from './components/err';
import { getStore } from './Utilits';
import { uid } from 'uid';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';





const img = 'https://picsum.photos/200/300?random';
const getUser = getStore('user');
const getProduct = getStore('product');





function App() {
  const toCent =  document.querySelector('.prodCont');
  const toNone =  document.querySelector('.prodList');
  const [login, setLogin] = useState(false);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [psw,setPsw] = useState('');
  const [user,setUser] = useState(getUser);
  const [pname,setPname] = useState('');
  const [price,setPrice] = useState('');
  const [products,setProducts] = useState(getProduct);
  const [modal,setModal] = useState(false);
  const [edit,setEdit] = useState(false);
  const [editID,setEditID] = useState(null);
  


  const id = uid();

  

  const handSignIn = () =>{
    const newUser = { name: name, password: psw};
    setUser(newUser)
  }

  const addProduct = () =>{
    if(!name && !price){
      console.log("Error");
    } else if(pname && edit){
      setProducts(products.map((item) => {
        if(item.id === editID){
          return {...item, name: pname, price:price}
        
        }
        return item
      }))
    }else{
      const newProduct = { id:id, img:img, name:pname,price:price}
      setProducts([...products , newProduct])
    }
  }


  const signOut = () =>{
    localStorage.removeItem('user');
    location.pathname = '/'
  }


  const deleteProd = (id) =>{
    const newProds = products.filter((item)=> item.id !== id);
    setProducts(newProds)
  }
  
  const editProd = (id) =>{
    // toCent.style.margin = "0"
    const oldItem = products.find((item) => item.id === id);
    setEditID(id)
    setPname(oldItem.name)
    setPrice(oldItem.price)
    setModal(!modal)
    setEdit(true)
  }


  useEffect(()=>{
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('product',JSON.stringify(products))
  },[user,products])




  return (
    <>
    
    <Navbar 
    login={login} 
    setLogin={setLogin} 
    name={name} 
    setName={setName} 
    user={user} />


    <Routes>
    <Route path='/' element={<Home />}  />
      <Route path='login' element={ login ? <Login
                                            login={login} 
                                            setLogin={setLogin} 
                                            name={name} 
                                            setName={setName} 
                                            psw={psw} 
                                            setPsw={setPsw} 
                                            handSignIn={handSignIn} 
                                            /> : < Profile 
                                                  signOut={signOut} />}/>  
      <Route path='products' element={ user.name ? <Products 
                                                    products={products} 
                                                    setProducts={setProducts} 
                                                    addProduct={addProduct} 
                                                    editProd={editProd} 
                                                    modal={modal} 
                                                    setModal={setModal} 
                                                    deleteProd={deleteProd} 
                                                    pname={pname} 
                                                    setPname={setPname} 
                                                    price={price} 
                                                    setPrice={setPrice} 
                                                    /> : <Err 
                                                          name={name} 
                                                          user={user} />} />
    </Routes>
    
      
    </>
  )
  }

export default App
