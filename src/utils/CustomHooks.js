import { useQuery } from "@tanstack/react-query";
import fakeapi from "./fakeapi";

export  function useGetProduct() {
  return useQuery({
    queryKey:['productlist'],
        queryFn:async()=>{
         const res=  await fakeapi.get('/products')
         return res.data
        }
  })
}

export  function useGetCategory() {
  return useQuery({
    queryKey:['productlist'],
        queryFn:async()=>{
         const res=  await fakeapi.get('/products')
         return res.data
        }
  })
}
