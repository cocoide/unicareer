import HStack from '@/components/Elements/HStack'
import CompanySection from './components/CompanySection'
import ProfileSection from './components/ProfileSection'
import ScheduleSection from './components/ScheduleSection'

const companies = [
    { rank: 1, name: "〇〇ホールディングス" },
    { rank: 2, name: "〇〇商社" },
    { rank: 3, name: "〇〇株式会社" },
]
const schedules = [
    { title: "A社ES〆切", date: "2023/05/20" },
    { title: "B社面接", date: "2023/07/13" },
    { title: "C社座談会", date: "2023/07/23" },
]
const page = () => {
    return (
        <HStack styles='bg-gray-100 h-screen w-full space-y-5 p-5'>
            <div className="flex flex-col md:flex-row w-full gap-5">
                <ProfileSection />
                <CompanySection companies={companies} />
            </div>
            <ScheduleSection schedules={schedules} />
        </HStack>
    )
}
export default page