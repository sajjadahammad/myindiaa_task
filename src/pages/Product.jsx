
import CategorySkeleton from "../components/loading/CategorySkeleton"
import ProductCard from "../components/ProductCard"
import CardSkeleton from "../components/loading/Skeleton"
import useGetCategory from "../utils/customhooks/useGetCategory"
import useGetProduct from "../utils/customhooks/useGetProduct"
import { Link, useSearchParams } from "react-router-dom"

export default function Product() {
    const { data = [], isLoading } = useGetProduct()

    const { data: cdata, isLoading: cisLoading } = useGetCategory()

    const [searchParams, setSearchParams] = useSearchParams()

    const category = searchParams.get('category')

    const filterdData = category ? data.filter((product) => product.category === category) : data


    return (
        <div>

            <div className="flex gap-4 my-8 md:items-center flex-col md:flex-row  *:whitespace-nowrap">
                <h1 className="text-2xl font-semibold">Categories :</h1>
                <div>
                    <div className="overflow-x-auto flex gap-4 pb-5 md:pb-0 *:first-letter:uppercase  *:text-center *:px-3 *:py-1 *:rounded-md">
                        <Link to='.' className=" hover:scale-90 transition-transform delay-75 ease-in cursor-pointer bg-zinc-300">all</Link>
                        {cisLoading ? (<CategorySkeleton />) : (cdata.map((category, i) => (
                            <Link key={i} to={`?category=${category}`} className="  hover:scale-90 transition-transform  bg-zinc-300 delay-75 ease-in cursor-pointer">
                                {category}
                            </Link>
                        )))}
                    </div>
                </div>

            </div>
            {isLoading ? (<CardSkeleton num={8} />) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {filterdData.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            )}
        </div>
    )
}
