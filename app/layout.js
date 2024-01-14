import { Urbanist } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
const inter = Urbanist({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body  className={inter.className}>
        <div className='w-screen h-fit overflow-x-hidden'>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
