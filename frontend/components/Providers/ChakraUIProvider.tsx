"use client"
import { ChakraProvider } from '@chakra-ui/react'

const ChakraUIProvider = ({ children }: LaytoutChildren) => {
    return (
        <ChakraProvider>{children}</ChakraProvider>
    )
}
export default ChakraUIProvider