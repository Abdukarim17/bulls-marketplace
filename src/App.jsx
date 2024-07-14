
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const url = 'http://localhost:3000'

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function fetchProducts(){
      try{
        const response= await fetch(`${url}/products`);
        const data = await response.json()
      }catch(e){
        console.error(e)
      }
    }
  })



   

  return (
    <>
    <div>
      <Header />
      <Sidebar />
      <main>
        <Content />
      </main>
    </div>
      
    </>
  )
}

export default App
