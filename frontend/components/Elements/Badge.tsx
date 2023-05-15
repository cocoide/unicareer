"use client"

import { clsx } from '@/utils/clsx'

interface Props {
    label: string
    styles?: string
}
const Badge = (props: Props) => {
    return (
        <div className={clsx(`rounded-md flex items-center justify-center`, props.styles!)}
        >{props.label}</div>
    )
}
export default Badge