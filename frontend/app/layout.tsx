import Header from '@/components/Layouts/Header/Header'
import ChakraUIProvider from '@/components/Providers/ChakraUIProvider'
import '../styles/globals.css'

export const metadata = {
  title: 'Unicareer',
  description: 'Let`s find your best career',
}

export default function RootLayout({ children }: LaytoutChildren) {
  return (
    <html lang="ja">
      <body>
        <ChakraUIProvider>
        <Header />
        {children}
        </ChakraUIProvider>
      </body>
    </html>
  )
}
