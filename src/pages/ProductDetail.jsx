import { Link, useLocation, useParams } from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import fakeapi from "../utils/fakeapi";
import ProductCard from "../components/ProductCard"
import CardSkeleton from "../components/loading/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { addItem, cartItem } from "../store/cartSlice";
import { toast } from "sonner";
import DetailSkeleton from "../components/loading/DetailSkeleton";


export default function ProductDetail() {
    const { id } = useParams()
    const location = useLocation()
    const search = location.state?.category || ''
    const dispatch = useDispatch()
    const cartdata= useSelector(cartItem)

    console.log('s',cartdata);

    const { data=[], isLoading } = useQuery({
        queryKey: ['productDetail',id],
        queryFn: async () => {
            const res = await fakeapi.get(`/products/${id}`)
            return res.data
        }
    })

    const { data:rdata=[], isLoading:risLoading } = useQuery({
        queryKey: ['relatedproduct',data.category],
        queryFn: async () => {
            const res = await fakeapi.get(`/products/category/${data.category}`)
            return res.data
        },
        enabled:!!data.category
    })

    const handleCart=()=>{
        dispatch(addItem(data))
        toast.success(`${data.title} added to cart!`);
    }

    console.log('s', data);
    return (
        <div className=" pt-5">

            <Link to={`/products${search}`} className=" border-black border rounded-md text-sm px-3 py-2 mb-5 active:scale-95 transition-transform ease-in delay-150"><IoArrowBackOutline className="inline" />Go Back</Link>

            {isLoading ? (<DetailSkeleton/>) : (
                <>
                    <div className="py-10 flex flex-col md:flex-row justify-center md:justify-between mt-4 ">
                        <div className=" max-w-screen-sm order-2 md:order-1 pt-5 md:pt-0">
                            <h1 className="font-semibold text-xl md:text-3xl">{data.title}</h1>
                            <p className="mt-5  leading-7 text-balance text-sm md:text-base">{data.description}</p>
                            <div className="flex justify-between py-7">
                                <span className="font-semibold text-xl">${data.price}</span>
                              <div className="whitespace-nowrap">
                                <div className="flex gap-2">Rating : <div><FaStar className="inline me-2" size={10}/>{data.rating.rate}</div>/<div>{data.rating.count}</div></div>

                              </div>
                            </div>
                                <div className="flex justify-center md:justify-start pt-6">
                                        <button onClick={handleCart} className="bg-black text-white rounded-md px-7 active:scale-95 transition-transform  ease-in py-2">Add to Cart</button>
                                </div>
                        </div>
                        <img src={data.image} alt="" className="max-w-64 mx-auto md:max-w-96 md:max-h-96 order-1 md:order-2" />


                    </div>
                </>
            )}

            <div className="pt-6">
                <h2 className="text-xl font-semibold">Related Products</h2>

                    <div className="grid grid-flow-col overflow-x-auto gap-5 py-10">
                            {risLoading?(<CardSkeleton num={4}/>):(
                                rdata.map((products)=>(
                                    <div key={products.id} className=" min-w-60">
                                    <ProductCard  data={products}/>
                                    </div>
                                ))
                            )}
                    </div>
            </div>
        </div>
    )
}
