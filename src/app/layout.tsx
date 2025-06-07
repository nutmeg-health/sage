import { Inter } from 'next/font/google'
import Header from './components/header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nutmeg Health',
  description: 'Nutmeg Health is a healthcare company that provides a range of services to help people stay healthy and active.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
