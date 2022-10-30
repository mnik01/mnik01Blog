export const appendixParser = (notionPageRecordMap: PageRecordMap) => {
  const stringifiedPage = JSON.stringify(notionPageRecordMap)
  const hasAppendix = stringifiedPage.includes('BlogAppendix!:start')
  if (!hasAppendix) {
    return ({
      hasAppendix: false,
    })
  }

  const { prefix, ogImage, postImage } = JSON.parse(stringifiedPage.split('BlogAppendix!:start')[1]?.split('BlogAppendix!:end')[0]!.replaceAll(`\\`, '') as string) as Appendix

  return {
    hasAppendix,
    prefix,
    ogImage,
    postImage,
  }
}
