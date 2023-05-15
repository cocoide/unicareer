import { clsx } from '@/utils/clsx'

interface Props {
    styles?: string
    children: React.ReactNode
}
const HStack = (props: Props) => {
    return (
        <div className={clsx(`flex flex-col`, props.styles!)}>
            {props.children}
        </div>
    )
}
export default HStack