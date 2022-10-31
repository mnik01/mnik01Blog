import type { InferGetStaticPropsType, NextPage } from 'next'
import { useTheme } from 'next-themes'
import { NotionRenderer } from 'react-notion-x'
import Image from "next/legacy/image"
import Link from 'next/link'
import { getPageTitle } from 'notion-utils'
import Twemoji from 'react-twemoji'
import { getNotionPageById } from '../utils'
import { Seo } from '../components/Seo'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const getStaticProps = async () => {
  try {
    const notionPageRecordMap = await getNotionPageById('Resume-Maxim-Nikonov-b184c2366f4843bd96a92ec7749df5f1')

    return {
      props: {
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

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ notionPage, title }) => {
  const { theme } = useTheme()

  return (
    <>
      <Seo
        title={title}
      />
        <NotionRenderer
          recordMap={notionPage}
          fullPage={true}
          darkMode={theme === 'dark'}
          defaultPageIcon={'💙'}
          previewImages
          header={<Header extendClasses="fixed top-0 left-0 w-full" />}
          footer={<Footer />}
          components={{
            nextImage: Image,
            nextLink: Link,
          }}
        />
    </>
  )
}

export default Post
