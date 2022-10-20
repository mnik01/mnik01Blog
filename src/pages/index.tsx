import type { InferGetStaticPropsType, NextPage } from 'next'
import { useTheme } from 'next-themes'
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'
import Image from 'next/image'
import Link from 'next/link'
import { getPageTitle } from 'notion-utils'
import Twemoji from 'react-twemoji'
import { Seo } from '../components/Seo'
import { Footer } from '../components/Footer'

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage('Typescript-React-1f986e9271144a92ad1257fd5b09176e')
  const pageTitle = getPageTitle(recordMap)

  return {
    props: {
      notionPage: recordMap,
      title: pageTitle,
      locale,
    },
    revalidate: 60,
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ notionPage, title, locale }) => {
  const { theme } = useTheme()

  return (
    <>
      <Seo title={title} />
      <Twemoji options={{ className: 'twemoji' }}>
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

export default Home
