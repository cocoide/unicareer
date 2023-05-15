"use client"

import HStack from '@/components/Elements/HStack';
import WStack from '@/components/Elements/WStack';
import { useDate } from '@/hooks/useDate';

interface Props {
    schedules: {
        title: string;
        date: string;
    }[]
}
const ScheduleSection = (props: Props) => {
    const { parseStrDateToOnlyStrDate } = useDate()
    const parseDate = parseStrDateToOnlyStrDate
    return (
        <HStack styles='bg-white rounded-xl p-2 space-y-2 w-full'>
            <div className="text-primary">予定・計画</div>
            {props.schedules.map(s => (
                <WStack key={s.title} styles="space-x-2 justify-between">
                    <div className="">{s.title}</div>
                    <div className="">{parseDate(s.date)}</div>
                </WStack>
            ))}
        </HStack>
    )
}
export default ScheduleSection