import ProductCard from "../components/ProductCard"
import useProductlist, { useGetProduct } from "../utils/CustomHooks"

export default function Product() {
    const {data,isLoading,error}=useGetProduct()


    if(isLoading){
        return <p>loading</p>
    }
  return (
    <div>
        <div className="flex">

        </div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {data.map((product)=>(
                    <ProductCard key={product.id} data={product}/>
                ))}
        </div>
    </div>
  )
}
