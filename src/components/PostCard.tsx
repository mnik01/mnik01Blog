import type { FC } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { formatDistance, subDays } from 'date-fns'
import { ru } from 'date-fns/locale'

export const PostCard: FC<{ page: PageInternal } > = ({ page }) => {
  const postImage = page.appendix?.postImage ? `/images/${page.appendix.prefix}/${page.appendix.postImage}` : null
  const daysPast = formatDistance(subDays(new Date(page.createdAt), 3), new Date(), { locale: ru, addSuffix: true })

  return (
  <Link href={`/posts/${page.id}`}>
    <article className='flex sm:flex-col flex-row-reverse justify-between bordered shadow-md hover:shadow-lg transition rounded-[10px] overflow-hidden w-full h-48 sm:w-[224px] sm:h-96'>
      {postImage
        && <div className="relative w-28 shrink-0 sm:w-full min-h-96 sm:min-h-[167px]">
          <Image
            fill
            className="object-cover"
            alt={`preview image ${page.title}`}
            src={postImage}
          />
        </div>}
      <div className='flex justify-between w-full h-full flex-col p-4'>
        <main className="h-full">
          <div className="flex gap-2 items-start">
            {page.emoji && <div className="w-6 h-6 shrink-0">
              {page.emoji}
            </div>}
            <h1 className="text-[15px] font-black">{page.title}</h1>
          </div>
          {page.previewText && <p className={`pt-2 tracking-wide text-sm ${postImage ? 'line-clamp-4 sm:line-clamp-6' : 'line-clamp-5 sm:line-clamp-[12]'}`}>{page.previewText}...</p>}
        </main>
        <footer className="flex items-center justify-between">
          <p className="text-xs dark:text-white/80 text-stone-700 ">{daysPast}</p>
          <p className='text-xs text-orange-500 bg-orange-200 rounded-[3px] py-1 px-1.5 h-fit'>Статья</p>
        </footer>
      </div>
    </article>
  </Link>
  )
}
