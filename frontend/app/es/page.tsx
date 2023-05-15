import HStack from '@/components/Elements/HStack';
import ESHeader from './components/ESHeader';
import FormSection from './components/FormSection';

const page = () => {
    return (
        <HStack styles='w-full min-h-screen bg-neutral/50 p-5 gap-5 lg:px-10 pb-10'>
            <ESHeader />
            <FormSection />
        </HStack>
    )
}
export default page