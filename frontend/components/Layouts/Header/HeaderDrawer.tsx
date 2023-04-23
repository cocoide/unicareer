"use client"

import { DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Drawer } from '@chakra-ui/react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'

const HeaderDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)

    return (
        <div className='md:hidden'>
            <button onClick={onOpen} ref={btnRef}>
                <Bars3BottomLeftIcon className='h-7 w-7 text-gray-400' />
            </button>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                    </DrawerHeader>

                    <DrawerBody>
                    </DrawerBody>

                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
export default HeaderDrawer