"use client"

import useWindowSize from '@/hooks/useWindowSize';
import { usePathname } from 'next/navigation';
import HeaderDrawer from './components/HeaderDrawer';
import { NotificationPopver } from './components/NotificationPopver';


const Header = () => {
    const validPaths = ['/'];
    const pathName = usePathname();
    const { isMobile } = useWindowSize()
    if (!validPaths.includes(pathName) && isMobile) {
        // validPathsに含まれるpathかつMobileの画面幅(768px以下)の場合
        // Headerはアンマウント
        return null;
    }
    return (
        <div className="flex flex-row justify-between items-center py-2 px-5 md:px-10 w-full border-b-2 border-gray-100">
            <HeaderDrawer />
            <div className="text-primary font-bold text-xl">Unicareer</div>
            <div className="flex items-center justify-center space-x-5">
                <NotificationPopver />
            </div>
        </div>
    )
}
export default Header