import Analytics from '@/components/Analytics'
import '@/styles/tailwind.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
