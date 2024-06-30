import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProductCard({data:{id,image,title,description,price}}) {
    return (

            <Link to={`/product/${id}`} className="group block shadow rounded">
                <img
                    src={image}
                    alt=""
                    className="h-[250px] w-full object-cover sm:h-[350px]"
                />

                <div className="mt-3 flex justify-between text-sm px-3 py-3">
                    <div>
                        <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4 line-clamp-1">
                            {title}
                        </h3>

                        <p className="mt-1.5 text-pretty text-xs text-gray-500 line-clamp-2">
                           {description}
                        </p>
                    </div>

                    <p className="text-gray-900">${price}</p>
                </div>
            </Link>

       
    )
}
