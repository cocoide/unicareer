"use client"

import { Modal, ModalBody, ModalCloseButton, ModalContent, useDisclosure } from '@chakra-ui/react'
import { BellIcon } from '@heroicons/react/24/outline'

const NotificationModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <button onClick={onOpen}><BellIcon className='h-7 w-7 text-gray-400' /></button>
            <Modal onClose={onClose} size={"full"} isOpen={isOpen}>

                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody pt={10}>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>

    )
}
export default NotificationModal