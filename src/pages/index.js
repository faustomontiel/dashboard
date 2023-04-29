import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Head from 'next/head'
import TopCards from '@/components/TopCards'
import BarChart from '@/components/BarChart'
import RecentOrders from '@/components/RecentOrders'

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
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  )
}
