import './globals.css'
import Header from './Header'
import Providers from './Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})  {
  return (
    <html lang="en">
      <head />
      <body className="transition-all duration-700 bg-gray-100 dark:bg-zinc-900">
        <Providers>
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
