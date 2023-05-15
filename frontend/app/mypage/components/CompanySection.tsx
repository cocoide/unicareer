"use client"

import Badge from '@/components/Elements/Badge'
import HStack from '@/components/Elements/HStack'
import WStack from '@/components/Elements/WStack'
import { DocumentTextIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

interface Props {
    companies: {
        rank: number;
        name: string;
    }[]
}
const CompanySection = (props: Props) => {
    return (
        <HStack styles='bg-white rounded-xl p-2 space-y-2 w-full'>
            <div className="text-primary"> 志望企業</div>
            {props.companies.map(c => (
                <WStack key={c.name} styles="space-x-2 justify-between">
                    <WStack styles="space-x-2">
                        <Badge label={String(c.rank)} styles='text-white bg-neutral w-5 h-5 p-1' />
                        <div className="hover:bg-gray-100 p-1 duaration-300 rounded-md">{c.name}</div>
                    </WStack>
                    <WStack styles="space-x-2">
                        <DocumentTextIcon className='w-6 h-6 text-gray-400' />
                        <GlobeAltIcon className='w-6 h-6 text-gray-400' />
                    </WStack>
                </WStack>
            ))}
        </HStack>
    )
}
export default CompanySection