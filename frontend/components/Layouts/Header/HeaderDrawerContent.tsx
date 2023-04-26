"use client"
import { Avatar, AvatarGroup, Box, Image, Stack } from '@chakra-ui/react'
import { LockClosedIcon } from '@heroicons/react/24/solid'

const HeaderDrawerContent = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="p-2">
                <Box w='100%' color='white' borderRadius="lg" className='bg-neutral p-3'>
                <div className="font-bold flex items-center justify-center"><LockClosedIcon className='w-5 h-5' /> ログイン</div>
            </Box>
            </div>
            <Stack direction='row' justify={"space-between"} placeItems={"center"} p={3}>
                <div className="text-gray-400 text-sm">コミュニティリスト（3）</div>
                <div className="text-primary text-sm">管理</div>
            </Stack>
            <Box w='100%' color='white' className='hover:bg-neutral/30 w-full p-3'>
                <Stack direction='row' justify={"flex-start"} placeItems={"center"} spacing={"3"}>
                    <Image
                        boxSize='80px'
                        objectFit='cover'
                        src='https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
                        alt='Dan Abramov'
                        rounded={"md"}
                    />
                    <Stack direction={"column"}>
                        <div className="text-gray-400">25卒エンジニア</div>
                        <AvatarGroup size='sm' max={4}>
                            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </AvatarGroup>
                    </Stack>
                </Stack>
            </Box>
            {/* devide */}
            <Box w='100%' color='white' className='hover:bg-neutral/30 w-full p-3'>
                <Stack direction='row' justify={"flex-start"} placeItems={"center"} spacing={"3"}>
                    <Image
                        boxSize='80px'
                        objectFit='cover'
                        src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGlzY3Vzc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
                        alt='Dan Abramov'
                        rounded={"md"}
                    />
                    <Stack direction={"column"}>
                        <div className="text-gray-400">グループディスカッション</div>
                        <AvatarGroup size='sm' max={4}>
                            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </AvatarGroup>
                    </Stack>
                </Stack>
            </Box>
        </div>
    )
}
export default HeaderDrawerContent