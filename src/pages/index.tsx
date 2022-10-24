import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Seo } from '../components/Seo'

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Header />
      <div className='w-full h-64 bg-center bg-cover bg-[url(/images/pageCover.png)]' />
      <main className='containered'>
        <h1 className='pt-16 text-6xl h1 font-bold'>Максим Никонов</h1>
      </main>
    </>
  )
}

export default Home
