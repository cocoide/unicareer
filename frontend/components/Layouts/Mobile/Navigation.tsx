import { BriefcaseIcon, ChatBubbleOvalLeftEllipsisIcon, HomeIcon, PlusCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className="flex items-center justify-center  h-12 w-full 
    fixed bottom-0 py-1 space-x-8 md:hidden text-gray-500 border-t border-neutral shadow-md bg-white">
        <Link href="/" className='bg-neutral p-2 rounded-full' ><HomeIcon className='h-6 w-6 text-white'/> </Link>
        <Link href="/"  className='bg-slate-50 p-2 rounded-full'><BriefcaseIcon className='h-6 w-6'/> </Link>
        <Link href="/"  className='bg-slate-50 p-2 rounded-full'><PlusCircleIcon className='h-6 w-6'/> </Link>
        <Link href="/"  className='bg-slate-50 p-2 rounded-full'><ChatBubbleOvalLeftEllipsisIcon className='h-6 w-6'/> </Link>
        <Link href="/"  className='bg-slate-50 p-2 rounded-full'><UserCircleIcon className='h-6 w-6'/> </Link>
</div>
  )
}
export default Navigation