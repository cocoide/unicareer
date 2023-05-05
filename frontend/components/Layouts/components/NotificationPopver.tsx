"use client"

import { Button, Divider, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, VStack } from '@chakra-ui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const NotificationPopver = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Button  p="1" rounded="full" variant="ghost" >
                    <BellIcon className='text-gray-400' />
                </Button>
            </PopoverTrigger>
            <PopoverContent marginX={3} width={250} shadow={"md"}>
                <PopoverArrow />
                <PopoverBody >
                    <VStack  >
                        <Link href="">
                            〇〇さんにフォローされました
                        </Link>
                        <Divider />
                        <Link href={""}>
                            〇〇バッチを獲得しました🎊
                        </Link>
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}