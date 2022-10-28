export const checkHasCoverImage = (page: PageOfficialAPI) => {
  return page.cover?.type === 'file'
}
