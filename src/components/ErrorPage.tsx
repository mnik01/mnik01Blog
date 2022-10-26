import Link from 'next/link'
import type { FC } from 'react'
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
          background: 'linear-gradient(180deg, rgba(187,211,225,1) 0%, rgba(203,222,236,1) 50%, rgba(233,240,247,1) 100%)',
        }}
        className="w-screen flex-col h-screen flex items-center justify-center"
      >
        <div className='blur-sm mix-blend-luminosity absolute top-0 left-0 w-full h-full bg-[url(/images/heart3d.webp)] bg-center bg-cover'/>
        <div className='absolute top-0 left-0 w-full h-full bg-black/25'/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="z-50 w-32 h-32 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
        <h1 className='z-50 text-white font-bold text-8xl'>{statusCode === '400' ? '404' : '505'}</h1>
        <h2 className='z-50 text-white text-xl font-medium'>{statusCode === '400' ? 'К сожалению страница не найдена' : 'К сожалению произошла ошибка'}</h2>
        <Link className='z-50 text-white text-xl font-medium' href='/'>
          <p className='z-50 text-white text-xl font-medium'>Лучше вернуться на <b className='text-blue-200 underline'>главную</b>...</p>
        </Link>
      </main>
    </>
  )
}

