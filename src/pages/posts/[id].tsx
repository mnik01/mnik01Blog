import type { InferGetStaticPropsType, NextPage } from 'next'
import { useTheme } from 'next-themes'
import { NotionRenderer } from 'react-notion-x'
import Image from "next/legacy/image"
import Link from 'next/link'
import { getPageTitle } from 'notion-utils'
import Twemoji from 'react-twemoji'

import { appendixParser, checkHasCoverImage, clearFromAppendix, getNotionPageById, getNotionPages } from '../../utils'
import { Seo } from '../../components/Seo'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

export const getStaticPaths = async () => {
  const pages = await getNotionPages()
  const paths = pages.map(({ id }) => ({
    params: { id },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

interface GetStaticPropsContextType { params: { id: string } }

export const getStaticProps = async ({ params }: GetStaticPropsContextType) => {
  try {
    let notionPageRecordMap = await getNotionPageById(params.id)
    const appendix = appendixParser(notionPageRecordMap)
    if (appendix.hasAppendix)
      notionPageRecordMap = clearFromAppendix(JSON.stringify(notionPageRecordMap))

    const pages = await getNotionPages()
    const relatedPage = pages.find(page => page.id === params.id)!

    return {
      props: {
        hasCover: checkHasCoverImage(relatedPage),
        appendix,
        notionPage: notionPageRecordMap,
        title: getPageTitle(notionPageRecordMap),
      },
      revalidate: 10,
    }
  }
  catch (error) {
    console.error(error)
    return { notFound: true }
  }
}

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ notionPage, title, hasCover, appendix }) => {
  const { theme } = useTheme()

  return (
    <>
      <Seo
        coverImgPath={appendix.ogImage && appendix.prefix ? `https://mnik01.vercel.app/images/${appendix.prefix}/${appendix.ogImage}` : undefined}
        title={title}
      />
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
        <NotionRenderer
          recordMap={notionPage}
          fullPage={true}
          darkMode={theme === 'dark'}
          pageCover={hasCover
            ? undefined
            : <div className='notion-page-cover-wrapper'>
                <div style={{
                  backgroundColor: 'rgb(67, 56, 202)',
                  backgroundImage: 'radial-gradient(at 58% 48%, rgb(243, 232, 255) 0, transparent 0%), radial-gradient(at 51% 12%, rgb(212, 212, 216) 0, transparent 36%), radial-gradient(at 51% 25%, rgb(250, 232, 255) 0, transparent 92%), radial-gradient(at 16% 71%, rgb(107, 114, 128) 0, transparent 62%), radial-gradient(at 100% 0%, rgb(154, 52, 18) 0, transparent 72%), radial-gradient(at 10% 98%, rgb(37, 99, 235) 0, transparent 5%)',
                }} className='notion-page-cover' />
            </div>
          }
          defaultPageIcon={'💙'}
          previewImages
          header={<Header extendClasses="fixed top-0 left-0 w-full" />}
          footer={<Footer />}
          components={{
            nextImage: Image,
            nextLink: Link,
          }}
        />
      </Twemoji>
    </>
  )
}

export default Post
