import type { FC } from "react"
import Link from 'next/link'

export const PostCard: FC<{ page: PageInternal } > = ({ page }) => {
  return (
  <Link href={`/posts/${page.id}`}>
    {page.coverImage
      ? (
        <article className='shadow-md rounded-[10px] transition-colors p-4 bg-[#68c7ed] hover:bg-[#79cdef] w-full h-fit sm:w-64 sm:h-96'>
          <div className='flex justify-between flex-col w-full h-full'>
            <div>
              <p className='text-white text-xs font-bold'>Статья</p>
              <h1 className='text-[#2F3437] mt-1 text-xl font-bold'>{page.title}</h1>
            </div>
            <p className='text-xs text-stone-100 pt-6'>4 дня назад</p>
          </div>
        </article>
        )
      : <article className='shadow-md rounded-[10px] transition-colors p-4 bg-[#68c7ed] hover:bg-[#79cdef] w-full h-fit sm:w-64 sm:h-96'>
        <div className='flex justify-between flex-col w-full h-full'>
          <div>
            <p className='text-white text-xs font-bold'>Статья</p>
            <h1 className='text-[#2F3437] mt-1 text-xl font-bold'>{page.title}</h1>
          </div>
          <p className='text-xs text-stone-100 pt-6'>4 дня назад</p>
        </div>
      </article>}
  </Link>
  )
}
