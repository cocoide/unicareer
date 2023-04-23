import { BellIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import HeaderDrawer from './HeaderDrawer'

const Header = () => {
    return (
        <div className="flex flex-row justify-between items-center py-2 px-5 md:px-10 w-full border-b border-gray-200">
            <HeaderDrawer />
                {/* Service Name*/}
                <div className="text-primary font-bold text-2xl"
                >Unicareer</div>
            <div className="flex items-center justify-center space-x-5">
                {/* Avatar Button*/}
                <BellIcon className='h-7 w-7 text-gray-400' />
                <Image src="/avater.jpeg" alt="avater" width={100} height={100}
                    className="bg-gray-200 h-10 w-10 rounded-full hidden md:flex" />
            </div>
        </div>
    )
}
export default Header