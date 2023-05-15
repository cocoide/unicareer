"use client"
import HStack from '@/components/Elements/HStack'
import WStack from '@/components/Elements/WStack'
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react'
import { ChevronUpDownIcon, PencilIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface Condition {
    query: string
    keyword?: string[]
    placeholder?: string
}
const button_style = "w-min-10 ring-1 ring-gray-300 p-1 rounded-md text-gray-400 whitespace-nowrap"
const input_style = "p-1 w-full border-b border-gray-300"
const FormSection = () => {
    const [conditions, setConditions] = useState<Condition[]>([
        { query: "強み", placeholder: "真剣に物事に取り組む" },
        { query: "弱み", placeholder: "のめり込み過ぎる" },
        { query: "対策", placeholder: "身を引いて客観的に捉える" },
        { query: "原体験", placeholder: "ゼミナールでの活動" },
    ])
    const [newCondition] = useState({ query: "キーワード", placeholder: "" });
    function handleNewCondition() {
        setConditions([...conditions, newCondition]);
    }
    return (
        <HStack styles="bg-white rounded-xl p-3 gap-3">
            <WStack styles="justify-between space-x-2 ">
                <div className="w-min-10 p-1 rounded-md text-gray-600 whitespace-nowrap">お題</div>
                <div className="w-min-10 p-1 rounded-md text-gray-600">あなたの強みと弱み</div>
                <ChevronUpDownIcon className='w-7 h-7 text-primary' />
            </WStack>
            {conditions?.map(c => (
                <WStack key={c.query} styles="justify-between space-x-2">
                    <button className={button_style}>{c.query}</button>
                    <input className={input_style} placeholder={c.placeholder}></input>
            </WStack>
            ))}
            <button className="bg-gray-300 text-white rounded-md p-1 whitespace-nowrap mx-auto"
                onClick={handleNewCondition}
            >新しい条件を追加</button>
            <WStack styles="justify-between space-x-2">
                <NumberInput size='sm' step={50} defaultValue={300} min={50} max={1000} width={100}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <button className="bg-primary p-1 rounded-xl text-white flex items-center justify-center"
                ><PencilIcon className="h-5 w-5" />ESを生成</button>
            </WStack>
        </HStack>
    )
}
export default FormSection