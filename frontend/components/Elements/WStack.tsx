import { clsx } from '@/utils/clsx'

interface Props {
    styles?: string
    children: React.ReactNode
}
const WStack = (props: Props) => {
    return (
        <div className={clsx(`flex flex-flex items-center`, props.styles!)}>
            {props.children}
        </div>
    )
}
export default WStack