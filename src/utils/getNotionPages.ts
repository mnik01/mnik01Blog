import { Client } from '@notionhq/client'
import { env } from '../env/server.mjs'

export interface NotionPage {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: { object: string; id: string }
  last_edited_by: { object: string; id: string }
  cover: { type: string; external: any }
  icon: { type: string; emoji: string }
  parent: { type: string; workspace: true }
  archived: false
  properties: { title: any }
  url: string
}

export const getNotionPages = async () => {
  const notion = new Client({ auth: env.NOTION_API_KEY })
  const { results } = await notion.search({})

  return results as NotionPage[]
}
