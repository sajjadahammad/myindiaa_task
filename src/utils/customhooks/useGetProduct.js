import { useQuery } from "@tanstack/react-query";
import fakeapi from "../fakeapi";

export default function useGetProduct() {
  return useQuery({
    queryKey:['productlist'],
        queryFn:async()=>{
         const res=  await fakeapi.get('/products')
         return res.data
        }
  })
}