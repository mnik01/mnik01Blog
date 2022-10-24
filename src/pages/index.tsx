import type { InferGetStaticPropsType, NextPage } from 'next'
import { useTheme } from 'next-themes'
import { NotionAPI } from 'notion-client'
import { getPageTitle } from 'notion-utils'

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
      <h1>main page</h1>
    </>
  )
}

export default Home
