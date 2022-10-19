import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from "react";
import { getPageTitle } from 'notion-utils'



export async function getStaticProps() {
  const notion = new NotionAPI()
  
  const recordMap = await notion.getPage('Typescript-React-1f986e9271144a92ad1257fd5b09176e')
  const pageTitle = getPageTitle(recordMap);
  
  return {
    props: {
      notionPage: recordMap,
      title: `- ${pageTitle}`,
    },
    revalidate: 60,
  }
}


const Footer: FC = () => {
  return <footer>footer</footer>
}


const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ notionPage, title }) => {
  


  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>mnik01 {title}</title>
        <meta name="description" content="Personal blog & portfolio. Front-end and design | t.me/mnik01" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://mnik01.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="mnik01 blog" />
        <meta property="og:description" content="Personal blog & portfolio. Front-end and design | t.me/mnik01" />
        <meta property="og:image" content="https://mnik01.vercel.app/api/og" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mnik01.vercel.app" />
        <meta property="twitter:url" content="https://mnik01.vercel.app/" />
        <meta name="twitter:title" content="mnik01 blog" />
        <meta name="twitter:description" content="Personal blog & portfolio. Front-end and design | t.me/mnik01" />
        <meta name="twitter:image" content="https://mnik01.vercel.app/api/og" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotionRenderer 
        recordMap={notionPage}
        fullPage={true}
        defaultPageIcon={"💙"}
        previewImages
        footer={<Footer />}
        components={{
          nextImage: Image,
          nextLink: Link
        }}
      />
    </>
  );
};

export default Home;
