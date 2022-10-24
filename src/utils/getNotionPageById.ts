import { NotionAPI } from 'notion-client'

export const getNotionPageById = async (id: string) => {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(id)

  return recordMap
}
