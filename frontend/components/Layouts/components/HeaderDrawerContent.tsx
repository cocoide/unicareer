"use client"
import { Avatar, AvatarGroup, Box, HStack, Image, Stack, Tag } from '@chakra-ui/react'
import { Cog6ToothIcon, QuestionMarkCircleIcon, UserIcon } from '@heroicons/react/24/outline'

const HeaderDrawerContent = () => {
    return (
        <div className="flex flex-col w-full">
            <Box w='100%' color='white' className=' text-gray-500'>
                <Stack direction='row' justify={"space-between"} placeItems={"center"} px={10} py={4}>
                    <UserIcon className='text-primary w-5 h-5' />
                    <QuestionMarkCircleIcon className='text-primary w-5 h-5' />
                    <Cog6ToothIcon className='text-primary w-5 h-5' />
                </Stack>
            </Box>
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

            <Stack direction='row' justify={"space-between"} placeItems={"center"} p={3}>
                <div className="text-gray-400 text-sm">興味のあるトピック（5）</div>
                <div className="text-primary text-sm">設定</div>
            </Stack>
            <HStack spacing={4} placeItems={"center"} p={3} >

                {interests.map(interest => (
                    <Tag key={interest.title} color={"white"} bg={"gray.500"}>{interest.title}</Tag>
                ))}
            </HStack>
        </div>
    )
}
export default HeaderDrawerContent

const interests = [
    { id: "4", title: "メガベン", },
    { id: "3", title: "コンサル", },
    { id: "2", title: "〇〇会社", },
]