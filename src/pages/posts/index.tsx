import type { InferGetStaticPropsType, NextPage } from 'next'
import Twemoji from 'react-twemoji'
import { Header } from '../../components/Header'
import { PostCard } from '../../components/PostCard'
import { Seo } from '../../components/Seo'
import { appendixParser, clearFromAppendixInString, getNotionPages } from '../../utils'
import { getNotionPageByIdWithId } from '../../utils/getNotionPageById'

export const getStaticProps = async () => {
  const pages = await getNotionPages()

  const promises: Promise<{ id: string; recordMap: PageRecordMap }>[] = []
  pages.map(page => page.id).forEach((id) => { promises.push(getNotionPageByIdWithId(id)) })
  const pagesContent = await Promise.all(promises)

  const pagesAdapted: PageInternal[] = pages.map((page) => {
    const notionPageRecordMap = pagesContent.find(({ id }) => id === page.id)!.recordMap

    const appendix = appendixParser(notionPageRecordMap)
    const previewText = clearFromAppendixInString(
      ((Object.values(notionPageRecordMap.block)
        .map(block => ({ type: block.value.type, text: block.value.properties?.title?.at(0)?.at(0) }))))
        .filter(block => block.type === 'text')
        .map(block => block.text)
        .join(' '),
    )

    return {
      emoji: page.icon?.emoji,
      previewText,
      category: 'article',
      title: page.properties.title.title[0].plain_text,
      coverImage: page.cover?.type === 'file' ? 'TODO' : null,
      appendix,
      id: page.id,
      createdAt: page.created_time,
    }
  })

  return { props: { pages: pagesAdapted } }
}

const Posts: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ pages }) => {
  return (
    <>
      <Seo title="Посты" />
      <Header />
      <main className='containered pt-[45px]'>
        <h1 className='text-4xl font-bold mt-4 sm:mt-16 mb-4'>Публикации</h1>
        <Twemoji
        options={{
          className: "twemoji",
          size: "svg",
          ext: ".svg",
          attributes: () => {
            return {
              rel: "preload",
              loading: "lazy",
              decoding: "sync",
            }
          },
        }}
      >
        <ul className='flex gap-2 flex-col sm:flex-row'>
          {pages.map((page, idx) => (<li key={page.id}>
            <PostCard isBlue={(idx + 1) % 3 === 0} page={page} />
          </li>))}
        </ul>
      </Twemoji>
      </main>
    </>
  )
}

export default Posts
