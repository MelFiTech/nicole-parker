import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nicole Parker\'s',
  description: 'EXCLUSIVE SKINCARE REGIMEN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
