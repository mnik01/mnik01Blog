import type { InferGetStaticPropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Seo } from '../../components/Seo'
import { getNotionPages } from '../../utils'
export const getStaticProps = async () => {
  const pages = await getNotionPages()

  return { props: { pages } }
}

const Posts: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ pages }) => {
  const { locale } = useRouter()

  return (
    <>
      <Seo title={locale === 'en' ? 'Posts' : 'Посты'} />
      <main>
        <h1>Posts</h1>
        <ul>
          {pages.map((page) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const pageTitle = page.properties.title.title[0].plain_text
            return <li key={page.id}>
                <Link href={`/posts/${page.id}`}>
                  <p className='text-blue-200 cursor-pointer underline'>{pageTitle}</p>
                </Link>
              </li>
          })}
        </ul>
      </main>
    </>
  )
}

export default Posts
