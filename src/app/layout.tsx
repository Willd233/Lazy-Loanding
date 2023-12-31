import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../style/index.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New Nexts App',
  description: 'Generated to create the following application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
