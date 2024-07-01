import { useState } from 'react';
import { Drawer } from 'antd';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux"
import { cartItem, selectTotalPrice } from "../store/cartSlice"
import DrawerCartItem from './DrawerCartItem';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
    const cartItems = useSelector(cartItem)
    const total = useSelector(selectTotalPrice)
    const [open, setOpen] = useState(false);
    const [loading, setLoading] =useState(true);
    const showLoading = () => {
      setOpen(true);
      setLoading(true);
  
      // Simple loading mock. You should add cleanup logic in real world.
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
  return (
    <div>
          <button className='rounded-md  px-5 py-2.5 text-sm font-medium text-black shadow' onClick={showLoading}>
          <FaCartShopping size={18}/>
      </button>
      <Drawer
        closable
        destroyOnClose
        title={<p>Cart</p>}
        placement="right"
        open={open}
        loading={loading}
        className='font-poppins'
        onClose={() => setOpen(false)}
      >
           <div className='max-h-[26rem] overflow-y-auto pe-3'>
            {cartItems.length>0?( cartItems.map((item)=>(
                <DrawerCartItem item={item} key={item.id}/>
            ))):(<p className="text-center">No Item in Cart</p>)}
        </div>
        {cartItems.length>0&& (<div className='flex justify-between py-3 items-center'>
          <p className="font-semibold h-fit">Total :${total.toFixed(2)}</p>
          <Link to={'/cart'} onClick={() => setOpen(false)} className=" border-black border rounded-md text-sm px-3 hover:text-black py-1  active:scale-95 transition-transform ease-in">Go to Cart</Link>
        </div>)}
      </Drawer>
    </div>
  )
}
