import Header from '@/components/Layouts/Header'
import '../styles/globals.css'

export const metadata = {
  title: 'Unicareer',
  description: 'Let`s find your best career',
}

export default function RootLayout({ children }: LaytoutChildren) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
