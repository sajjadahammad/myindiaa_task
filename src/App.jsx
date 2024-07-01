import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Product from './pages/Product'
import { Toaster } from 'sonner'


const router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>

      </Route>
    </>
  )
)


function App() {
  return (
    <>
  
     <Toaster position="top-right"/>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
