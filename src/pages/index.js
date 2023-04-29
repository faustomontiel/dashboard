import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main
        className='bg-gray-100 min-h-screen'
      >
        <Header />
      </main>
    </>
  )
}
