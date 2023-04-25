"use client"
import { Avatar } from '@chakra-ui/react'
import HeaderDrawer from './HeaderDrawer'
import NotificationModal from './NotificationModal'

const Header = () => {
    return (
        <div className="flex flex-row justify-between items-center py-2 px-5 md:px-10 w-full border-b border-gray-200">
            <HeaderDrawer />
                {/* Service Name*/}
            <div className="text-primary font-bold text-xl"
            >みんなのキャリア</div>
            <div className="flex items-center justify-center space-x-5">
                {/* Avatar Button*/}
                <NotificationModal />
                {/* <Avatar name="かずき" size="sm" className='hidden md:inline-block' /> */}
            </div>
        </div>
    )
}
export default Header