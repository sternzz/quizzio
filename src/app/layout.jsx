import Image from 'next/image'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Quizzio',
  description: 'The Quiz Game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <div disabled className=" select-none  brand fixed bottom-10 right-10 flex gap-2 text-white bg-black/20 p-2 px-4 rounded">
          <Image src={'/quizzio.png'} height={20} width={20} alt='quizzio' />
          <small>Quizzio</small>
        </div>
        </body>
    </html>
  )
}
