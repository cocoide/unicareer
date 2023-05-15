"use client"
import { clsx } from '@/utils/clsx'
import { ChatBubbleOvalLeftEllipsisIcon, DocumentTextIcon, HomeIcon, PlusCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const icon_style = 'h-6 w-6'
const navigations = [
  { path: "/", icon: <HomeIcon className={icon_style} /> },
  { path: "/es", icon: <DocumentTextIcon className={icon_style} /> },
  { path: "/post", icon: <PlusCircleIcon className={icon_style} /> },
  { path: "/chat", icon: <ChatBubbleOvalLeftEllipsisIcon className={icon_style} /> },
  { path: "/mypage", icon: <UserCircleIcon className={icon_style} /> },
]
const Navigation = () => {
  const currentPath = usePathname()
  return (
    <div className="flex items-center justify-center  h-12 w-full 
    fixed bottom-0 py-1 space-x-8 md:hidden text-gray-500 border-t border-gray-200 shadow-md bg-white">
      {navigations.map((navi, i) => (
        <Link key={i} href={navi.path} className={clsx('p-2 rounded-full duration-100',
          currentPath === navi.path ? "bg-gray-200 text-white" : "bg-gray-50")}
        >{navi.icon}</Link>
      ))}
</div>
  )
}
export default Navigation