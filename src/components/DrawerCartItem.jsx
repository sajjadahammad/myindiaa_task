

// eslint-disable-next-line react/prop-types
export default function DrawerCartItem({item:{image,title,description,rating:{rate,count},price,quantity}}) {
  return (
    <div className="flex gap-6 items-center pb-3 border-b-2">
    <img src={image} alt="" className="w-20 h-20 rounded-md" />
        <div>
            <h2 className="font-semibold text-sm">{title}</h2>
            <p className="line-clamp-1 max-w-52 text-xs">{description}</p>
            <div className="flex text-xs">Rating :<span className="font-semibold ">{rate}/{count}</span></div>
            <div className="flex justify-between items-center pt-2"><span className="text-sm font-semibold">${price}</span> <span className="text-xs">Quantity: <b>{quantity}</b> </span></div>
        </div>
</div>
  )
}
