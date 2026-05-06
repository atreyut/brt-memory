import { type Metadata } from 'next'
import { Providers } from '@/app/(website)/providers'
import { Layout } from '@/components/Layout'

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'BRT Memory',
  },
  description: 'BRT Memory - Test your knowledge of your city’s BRT system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}