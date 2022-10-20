import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from "react";
import { getPageTitle } from 'notion-utils'
import Twemoji from 'react-twemoji';



export const getStaticProps = async ({ locale }: {locale: string}) => {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage('Typescript-React-1f986e9271144a92ad1257fd5b09176e')
  const pageTitle = getPageTitle(recordMap);
  
  return {
    props: {
      notionPage: recordMap,
      title: pageTitle,
      locale,
    },
    revalidate: 60,
  }
}


const Footer: FC = () => {
  return <footer>footer</footer>
}


const EnMeta: FC<{title: string}> = ({title}) => {
  return (
    <>
      <meta name="description" content="Personal blog & portfolio. Front-end, design and other..." />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://mnik01.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="mnik01 blog" />
      <meta property="og:description" content="Personal blog & portfolio. Front-end, design and other..." />
      <meta property="og:image" content={`https://mnik01.vercel.app/api/og?title=${title}`} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="mnik01.vercel.app" />
      <meta property="twitter:url" content="https://mnik01.vercel.app/" />
      <meta name="twitter:title" content="mnik01 blog" />
      <meta name="twitter:description" content="Personal blog & portfolio. Front-end, design and other..." />
      <meta name="twitter:image" content={`https://mnik01.vercel.app/api/og?title=${title}`} />
    </>
  )
}
const RuMeta: FC<{title: string}> = ({title}) => {
  return (
    <>
      <meta name="description" content="Личный блок: статьи и мнения про айти, дизайн и прочее..." />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://mnik01.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="mnik01 blog" />
      <meta property="og:description" content="Личный блок: статьи и мнения про айти, дизайн и прочее..." />
      <meta property="og:image" content={`https://mnik01.vercel.app/api/og?title=${title}`} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="mnik01.vercel.app" />
      <meta property="twitter:url" content="https://mnik01.vercel.app/" />
      <meta name="twitter:title" content="mnik01 blog" />
      <meta name="twitter:description" content="Личный блок: статьи и мнения про айти, дизайн и прочее..." />
      <meta name="twitter:image" content={`https://mnik01.vercel.app/api/og?title=${title}`} />
    </>
  )
}


const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ notionPage, title, locale }) => {
  


  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>{title ? title : 'mnik01'}</title>
        {locale === 'ru' ? <RuMeta title={title}/> : <EnMeta title={title}/>}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Twemoji options={{ className: 'twemoji' }}>
        <NotionRenderer 
          recordMap={notionPage}
          fullPage={true}
          pageCover={
            <div className='notion-page-cover-wrapper'>
              <div style={{
                
          backgroundColor: `rgb(67, 56, 202)`,
          backgroundImage: `radial-gradient(at 58% 48%, rgb(243, 232, 255) 0, transparent 0%), radial-gradient(at 51% 12%, rgb(212, 212, 216) 0, transparent 36%), radial-gradient(at 51% 25%, rgb(250, 232, 255) 0, transparent 92%), radial-gradient(at 16% 71%, rgb(107, 114, 128) 0, transparent 62%), radial-gradient(at 100% 0%, rgb(154, 52, 18) 0, transparent 72%), radial-gradient(at 10% 98%, rgb(37, 99, 235) 0, transparent 5%)`,
              }} className='notion-page-cover' />
            </div>
          }
          defaultPageIcon={"💙"}
          previewImages
          footer={<Footer />}
          components={{
            nextImage: Image,
            nextLink: Link,
          }}
        />
      </Twemoji>
    </>
  );
};

export default Home;
