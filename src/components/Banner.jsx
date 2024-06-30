import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className="flex md:justify-between items-center flex-col md:flex-row pt-8 md:pt-0">
            <div className=" h-fit text-center md:text-start">
                <h1 className="font-bold text-4xl mb-3">Welcome to Fakecomm</h1>
                <p>&quot;Discover Amazing Deals on Top Brands.</p>
                <p> Shop the Latest Trends in Fashion, Electronics, and More!</p>
                <p>Unbeatable Prices, Unmatched Variety.&quot;</p>
                <div className="flex justify-center md:justify-start mt-4">
                    <Link to={'/products'} className="bg-black text-white rounded-md px-7 py-2">Shop Now</Link>
                </div>
            </div>
            <img src="/assets/b1.png" alt="" className=" max-h-[32rem]" />
        </div>
    )
}
