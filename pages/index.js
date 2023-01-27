import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/Components/NavBar'
import RecentProjects from '@/Components/RecentProjects'
import RecentPosts from '@/Components/RecentPosts'
import Info from '@/Components/Info'
import NewsLetter from '@/Components/NewsLetter'
import Copyright from '@/Components/Copyright'
// import Navbar from '@/Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  <div className='bg-slate-900'>
    <div className='mx-auto max-w-screen-lg px-3 py-6'>
<NavBar/>
<Info/>
<RecentProjects/>
<RecentPosts/>
<NewsLetter/>
<div className='border-t mt-7 border-gray-600 '></div>
<Copyright/>
    </div>
  </div>
    </>
  )
}
