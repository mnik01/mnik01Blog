import type { InferGetStaticPropsType, NextPage } from 'next'
import { useTheme } from 'next-themes'
import { NotionRenderer } from 'react-notion-x'
import Image from "next/legacy/image";
import Link from 'next/link'
import { getPageTitle } from 'notion-utils'
import Twemoji from 'react-twemoji'

import { getNotionPageById, getNotionPages } from '../../utils'
import { Seo } from '../../components/Seo'
import { Footer } from '../../components/Footer'

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

interface GetStaticPropsContextType { locale: string; params: { id: string } }

export const getStaticProps = async ({ locale, params }: GetStaticPropsContextType) => {
  try {
    const notionPage = await getNotionPageById(params.id)
    return {
      props: {
        notionPage,
        title: getPageTitle(notionPage),
        locale,
      },
      revalidate: 10,
    }
  }
  catch (error) {
    return { notFound: true }
  }
}

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ notionPage, title }) => {
  const { theme } = useTheme()

  return (
    <>
      <Seo title={title} />
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
          pageCover={
            <div className='notion-page-cover-wrapper'>
              <div style={{

                backgroundColor: 'rgb(67, 56, 202)',
                backgroundImage: 'radial-gradient(at 58% 48%, rgb(243, 232, 255) 0, transparent 0%), radial-gradient(at 51% 12%, rgb(212, 212, 216) 0, transparent 36%), radial-gradient(at 51% 25%, rgb(250, 232, 255) 0, transparent 92%), radial-gradient(at 16% 71%, rgb(107, 114, 128) 0, transparent 62%), radial-gradient(at 100% 0%, rgb(154, 52, 18) 0, transparent 72%), radial-gradient(at 10% 98%, rgb(37, 99, 235) 0, transparent 5%)',
              }} className='notion-page-cover' />
            </div>
          }
          defaultPageIcon={'💙'}
          previewImages
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
