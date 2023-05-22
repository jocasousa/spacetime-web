import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo criada construida com React, Next.js, TailwindCSS e TypeScript.',
}

export default function RootLayout({children}: {  children: React.ReactNode}) {
  const isAuthenticated = cookies().has('token');
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}>
  
        <main className="grid grid-cols-2 min-h-screen">
      {/* Left Side */}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url('../assets/bg-stars.svg')] bg-cover">
      
      {/* Blur */}
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 rounded-full translate-x-1/2 blur-full"></div>

      {/* Stripes */}
      <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes " />

      {/* SignIn */}
      { isAuthenticated ? <Profile /> :  <SignIn />  }

      {/* Hero */}
      <Hero />

      {/* Copyright */}
      <Copyright />
      
    </div>
    <div className='flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover'>
    {children}
    </div>
   </main>

        </body>
    </html>
  )
}
