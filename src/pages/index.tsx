import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'




export async function getStaticProps() {
  const notion = new NotionAPI()
  
  const notionPage = await notion.getPage('Typescript-React-1f986e9271144a92ad1257fd5b09176e')
  
  return {
    props: {
      notionPage,
    },
    revalidate: 60,
  }
}


const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ notionPage }) => {
  


  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <meta
          property="og:image"
          content="https://mnik01.vercel.app/api/og?title=my post title"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotionRenderer recordMap={notionPage} fullPage={true} darkMode={false} />
    </>
  );
};

export default Home;
