import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function HomeLoading() {
  return (
    < SkeletonTheme baseColor="#EEEEEE" highlightColor="#dcdcdc">
    <div className="h-[70vh] lg:min-w-[1280px]">


    </div>
    </SkeletonTheme>
  )
}
