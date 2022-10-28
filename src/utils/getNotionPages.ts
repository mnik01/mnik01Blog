import { Client } from '@notionhq/client'
import { env } from '../env/server.mjs'

export const getNotionPages = async () => {
  const notion = new Client({ auth: env.NOTION_API_KEY })
  const { results } = await notion.search({})

  return results as PageOfficialAPI[]
}
