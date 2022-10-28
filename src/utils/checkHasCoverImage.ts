import type { NotionPage } from "./types"

export const checkHasCoverImage = (page: NotionPage) => {
  return page.cover.type === 'file'
}
