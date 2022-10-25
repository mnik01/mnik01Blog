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
      <main className='containered'>
        <h1 className='text-4xl font-bold mb-4'>Публикации</h1>
        <ul>
          {pages.map(page => (<li key={page.id}>
            <Link href={`/posts/${page.id}`}>
              <p className='text-blue-200 cursor-pointer underline'>{page.properties.title.title[0].plain_text}</p>
            </Link>
          </li>))}
        </ul>
      </main>
    </>
  )
}

export default Posts
