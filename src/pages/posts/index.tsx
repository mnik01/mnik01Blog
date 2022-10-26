import type { InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Seo } from '../../components/Seo'
import { getNotionPages } from '../../utils'

export const getStaticProps = async () => {
  const pages = await getNotionPages()

  return { props: { pages } }
}

const Posts: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ pages }) => {
  return (
    <>
      <Seo title="Посты" />
      <Header />
      <main className='containered pt-[45px]'>
        <h1 className='text-4xl font-bold mt-16 mb-4'>Публикации</h1>
        <ul>
          <article className='shadow-md rounded-[10px] transition-colors p-4 bg-[#68c7ed] hover:bg-[#79cdef] w-full h-fit sm:w-64 sm:h-96'>
              <Link className='flex justify-between flex-col w-full h-full' href="/posts/57d54c52-3ce1-4d92-9401-759e283d7572">
                <div>
                  <p className='text-white text-xs font-bold'>Статья</p>
                  <h1 className='text-[#2F3437] mt-1 text-xl font-bold'>Как добавить Typescript в React приложение</h1>
                </div>
                <p className='text-xs text-stone-100 pt-6'>4 дня назад</p>
              </Link>
            </article>
          {/* {pages.map(page => (<li key={page.id}>
            <Link href={`/posts/${page.id}`}>
              <p className='text-blue-400 cursor-pointer underline'>{page.properties.title.title[0].plain_text}</p>
            </Link>
          </li>))} */}
        </ul>
      </main>
    </>
  )
}

export default Posts
