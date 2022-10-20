import type { FC } from 'react'
import Image from 'next/image'
import { Seo } from './Seo'

interface ErrorPageProps {
  statusCode: '400' | '500'
}

export const ErrorPage: FC<ErrorPageProps> = ({ statusCode }) => {
  return (
    <>
      <Seo title={statusCode === '400' ? '404 - Not found' : '505 - Error'} />
      <main
        style={{
          fontFamily: `'Lato', sans-srif`,
          background: 'linear-gradient(180deg, rgba(187,211,225,1) 0%, rgba(203,222,236,1) 50%, rgba(233,240,247,1) 100%)',
        }}
        className="w-screen flex-col h-screen flex items-center justify-center"
      >
        <div className='mix-blend-luminosity absolute top-0 left-0 w-full h-full bg-[url(/images/heart3d.png)] bg-center bg-cover'/>
        <h1 className='z-50 text-white sans text-4xl'>{statusCode === '400' ? '404 - Not found' : '505 - Error'}</h1>
        <h1 className='z-50 text-white'>TODO: add react-three-fiber</h1>
      </main>
    </>
  )
}

