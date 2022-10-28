import type { InferGetStaticPropsType, NextPage } from 'next'
import { Header } from '../../components/Header'
import { PostCard } from '../../components/PostCard'
import { Seo } from '../../components/Seo'
import { getNotionPages } from '../../utils'

export const getStaticProps = async () => {
  const pages = await getNotionPages()
  const pagesAdapted: PageInternal[] = pages.map(page => ({
    category: 'article',
    title: page.properties.title.title[0].plain_text,
    coverImage: page.cover?.type === 'file' ? 'TODO' : null,
    id: page.id,
    createdAt: page.created_time,
  }))

  return { props: { pages: pagesAdapted } }
}

const Posts: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ pages }) => {
  return (
    <>
      <Seo title="Посты" />
      <Header />
      <main className='containered pt-[45px]'>
        <h1 className='text-4xl font-bold mt-16 mb-4'>Публикации</h1>
        <ul className='flex gap-2 sm:flex-row flex-col'>
          {pages.map(page => (<li key={page.id}>
            <PostCard page={page} />
          </li>))}
        </ul>
      </main>
    </>
  )
}

export default Posts
