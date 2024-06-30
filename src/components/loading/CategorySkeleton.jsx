import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function CategorySkeleton() {
  return (
    <SkeletonTheme baseColor="#EEEEEE" highlightColor="#dcdcdc">
    <div className="grid grid-cols-4  gap-8 md:gap-5">
        {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className='w-24 px-3 py-2 ms-2 md:' />
        ))}
    </div>
</SkeletonTheme>
  )
}
