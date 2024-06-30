import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function NewArrivalCard({ data: { image, title, id, description } }) {
    return (
        <Link to={`/product/${id}`} className="group block shadow rounded ">
            <div className=" overflow-hidden">
                <img
                    src={image}
                    alt=""
                    className="h-[180px] w-full object-contain sm:h-[250px] hover:scale-110 delay-150 transition-transform ease-in"
                />
            </div>
            <div className="mt-3 text-sm px-3 py-3">
            <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4 line-clamp-1">
                {title}
            </h3>
            <p className="mt-1.5 text-pretty text-xs text-gray-500 line-clamp-2">
                {description}
            </p>
            </div>
        </Link>
    )
}
