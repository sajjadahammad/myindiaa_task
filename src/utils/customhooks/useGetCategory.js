import fakeapi from "../fakeapi"
import { useQuery } from "@tanstack/react-query"

export default function useGetCategory() {
  return useQuery({
    queryKey:['categorylist'],
        queryFn:async()=>{
         const res=  await fakeapi.get('/products/categories')
         return res.data
        }
  })
}