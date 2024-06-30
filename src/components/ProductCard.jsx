import { Link,useSearchParams } from "react-router-dom"; 

// eslint-disable-next-line react/prop-types
export default function ProductCard({data:{id,image,title,description,price}}) {

    
    const [searchParams,setSearchParams] =useSearchParams()

    // console.log('d',searchParams.toString());

    return (

            <Link to={`/product/${id}`} state={{category:`?${searchParams.toString()}`}} className="group block shadow rounded hover:scale-105 transition-transform delay-100 ease-in-out">
                <img
                    src={image}
                    alt=""
                    className="h-[180px] w-full object-contain sm:h-[250px]"
                />

                <div className="mt-3 flex justify-between flex-col md:flex-row text-sm px-3 py-3">
                    <div>
                        <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4 line-clamp-1" >
                            {title}
                        </h3>

                        <p className="mt-1.5 text-pretty text-xs text-gray-500 line-clamp-2 " style={{wordBreak:'break-all'}}>
                           {description}
                        </p>
                    </div>

                    <p className="text-gray-900 font-medium" >${price}</p>
                </div>
            </Link>

       
    )
}
