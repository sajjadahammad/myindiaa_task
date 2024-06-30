
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


export default function DetailSkeleton() {
  return (
    < SkeletonTheme baseColor="#EEEEEE" highlightColor="#dcdcdc">
    <div className='hidden md:block'>
      <div className='py-10 grid md:grid-cols-2 gap-5'>
        <div>
          <Skeleton count={1} className='h-8 mb-5'/>
          <Skeleton count={12} className='h-4'/>
        </div>
        <div>
          <Skeleton className='mx-auto md:max-w-96 md:max-h-96 min-h-96 '/>
        </div>
      </div>
    </div>
    <div className='block md:hidden'>
      <div className='py-10 grid md:grid-cols-2 gap-5'>
        <div className='order-2'>
          <Skeleton count={1} className='h-8 mb-5'/>
          <Skeleton count={12} className='h-4'/>
        </div>
        <div>
          <Skeleton className='mx-auto md:max-w-96 md:max-h-96 min-h-96 order-1'/>
        </div>
      </div>
    </div>
    </SkeletonTheme>

    
  )
}
