import { useSelector } from "react-redux"
import { cartItem, selectTotalPrice } from "../store/cartSlice"
import CartItem from "../components/CartItem"


export default function Cart() {

    const cartItems = useSelector(cartItem)
    const total = useSelector(selectTotalPrice)
    console.log('s',cartItems);
  return (
    <div className="md:px-8">

        <h1 className="text-3xl  font-semibold">Cart</h1>

        <div>
            {cartItems.length>0?( cartItems.map((item)=>(
                <CartItem item={item} key={item.id}/>
            ))):(<p className="text-center">No Item in Cart</p>)}
        </div>
        {cartItems.length>0&& (<p className="font-semibold text-lg">Total :${total.toFixed(2)}</p>)}
        
    </div>
  )
}
