import WStack from '@/components/Elements/WStack';
import { CurrencyDollarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
const ESHeader = () => {
    return (
        <WStack styles='justify-between text-primary'>
            <WStack styles="font-bold border-b border-primary p-1"
            ><DocumentTextIcon className='w-5 h-5' /> エントリーシート</WStack>
            <WStack styles='text-white bg-primary rounded-xl p-1'>
                <CurrencyDollarIcon className='w-5 h-5' />
                <div className="">Premium</div>
            </WStack>
        </WStack>
    )
}
export default ESHeader