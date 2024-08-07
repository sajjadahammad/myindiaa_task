
import Banner from "../components/Banner"
import HomeLoading from "../components/loading/HomeLoading"
import CardSkeleton from "../components/loading/Skeleton"
import NewArrivalCard from "../components/NewArrivalCard"
import useGetProduct from "../utils/customhooks/useGetProduct"

export default function Home() {

    const {data=[],isLoading,error}=useGetProduct()


    const newarrivals= data.slice(4,8).reverse()

    console.log('d',newarrivals);
  return (
    <div>
        {isLoading?(<HomeLoading/>):(
  <Banner/>
        )}
      

        <h4 className="text-2xl font-semibold py-5">New Arrivals</h4>

        {isLoading?(<CardSkeleton num={4}/>):(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {newarrivals.map((product)=>(
                    <NewArrivalCard key={product.id} data={product}/>
                ))}
        </div>
        )}
    </div>
  )
}
