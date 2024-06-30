import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function CardSkeleton({num}) {
    return (
        <SkeletonTheme baseColor="#EEEEEE" highlightColor="#dcdcdc">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {[...Array(num)].map((_, index) => (
                    <Skeleton key={index} className='h-[250px] w-full object-cover sm:h-[350px]' />
                ))}
            </div>
        </SkeletonTheme>
    )
}
