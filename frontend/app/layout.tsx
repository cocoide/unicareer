import Header from '@/components/Layouts/Header'
import Navigation from '@/components/Layouts/Mobile/Navigation'
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
        <Navigation/>
        </ChakraUIProvider>
      </body>
    </html>
  )
}
