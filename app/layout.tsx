import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'
import ActiveStatus from './components/ActiveStatus'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'chatMan',
  description: 'Online Text Chat Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" ></link>
      <body className={inter.className}>

        <AuthContext>
        <ToasterContext />
        <ActiveStatus />
        {children}
        </AuthContext>
        
      </body>
    </html>
  )
}
