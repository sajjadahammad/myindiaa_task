import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function HomeLoading() {
  return (
    < SkeletonTheme baseColor="#EEEEEE" highlightColor="#dcdcdc">
    <Skeleton className="h-[70vh] rounded-md lg:max-w-[1280px] w-full">


    </Skeleton>
    </SkeletonTheme>
  )
}
