"use client"
import HStack from '@/components/Elements/HStack'
import WStack from '@/components/Elements/WStack'
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react'

const FormSection = () => {
    return (
        <HStack styles="bg-white rounded-xl p-3 gap-3">
            <div className="">お題・質問</div>
            <input className="p-1 border-b border-gray-300" placeholder="(例)あなたの強みと弱み"></input>
            <WStack styles="justify-between space-x-2">
                <button className="bg-gray-300 p-1 rounded-md text-white whitespace-nowrap"
                >原体験</button>
                <input className="p-1 w-full ring-1 ring-gray-300 rounded-md" placeholder="〇〇の時のエピソード"></input>
            </WStack>
            <WStack styles="justify-between space-x-2">
                <button className="bg-gray-300 p-1 rounded-md text-white whitespace-nowrap"
                >感情•思い</button>
                <input className="p-1 w-full ring-1 ring-gray-300 rounded-md" placeholder="〇〇を意識した"></input>
            </WStack>
            <WStack styles="justify-between space-x-2">
                <button className="bg-gray-300 p-1 rounded-md text-white whitespace-nowrap"
                >行動・反省</button>
                <input className="p-1 w-full ring-1 ring-gray-300 rounded-md" placeholder="〇〇をした。そして〇〇を学んだ。"></input>
            </WStack>
            <WStack styles="justify-between space-x-2">
                <NumberInput size='sm' step={50} defaultValue={300} min={50} max={1000} width={100}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <button className="bg-primary p-1 rounded-md text-white whitespace-nowrap">ESを生成</button>
            </WStack>
        </HStack>
    )
}
export default FormSection