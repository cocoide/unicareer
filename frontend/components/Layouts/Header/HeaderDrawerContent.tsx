"use client"
import { Box } from '@chakra-ui/react'
import { LockClosedIcon } from '@heroicons/react/24/solid'

const HeaderDrawerContent = () => {
    return (
        <div className="p-2">
            <Box w='100%' p={5} color='white' borderRadius="lg" className='bg-neutral'>
                <div className="font-bold flex items-center justify-center"><LockClosedIcon className='w-5 h-5' /> ログイン</div>
            </Box>
        </div>
    )
}
export default HeaderDrawerContent