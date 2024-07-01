import {useDispatch } from "react-redux"
import { incrementQuantity,decrementQuantity, removeItem } from "../store/cartSlice"
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

// eslint-disable-next-line react/prop-types
export default function CartItem({item:{id,image,title,description,quantity,price,rating:{rate,count}}}) {

    const deleteCart=()=>{
        dispatch(removeItem(id))
        toast.success(`${title} deleted `)
    }


    const dispatch = useDispatch()
  return (
    <div className="py-5 mb-5">
        <div className="flex gap-6 items-center pb-3">
            <img src={image} alt="" className="w-20 h-20 rounded-md" />
                <div>
                    <h2 className="font-semibold text-sm">{title}</h2>
                    <p className="line-clamp-1 max-w-52 text-xs">{description}</p>
                    <div className="flex text-xs">Rating :<span className="font-semibold ">{rate}/{count}</span></div>
                    <span className="text-sm font-semibold">${price}</span>
                </div>
        </div>
        <div className="border-t">
            <div className="flex justify-between py-3">
                <div>
                    <div className="flex gap-2 ">
                    <button onClick={() => dispatch(incrementQuantity(id))} className="border px-2 rounded-md">+</button>
                    <h3>{quantity}</h3>
                    <button onClick={() => dispatch(decrementQuantity(id))} className="border px-2 rounded-md">-</button>
                    </div>
                </div>
                <MdDelete size={20} onClick={deleteCart} className="cursor-pointer"/>
            </div>
        </div>
    </div>
  )
}
