import Image from 'next/image'

const ProfileSection = () => {
    return (
        <div className="bg-white rounded-xl  p-2 flex items-center w-full">
            <Image src={"/avater.jpeg"} width={100} height={100} alt='avatar' className="rounded-full ring-4 ring-gray-100" priority={true}></Image>
        </div>
    )
}
export default ProfileSection