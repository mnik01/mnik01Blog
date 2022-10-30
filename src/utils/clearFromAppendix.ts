export const clearFromAppendix = (notionPageRecordMap: string) => {
  const x = notionPageRecordMap.split('BlogAppendix!:start')[0] as string
  const y = notionPageRecordMap.split('BlogAppendix!:start')[1]!.split('BlogAppendix!:end')[1]

  return JSON.parse(x + y) as PageRecordMap
}

export const clearFromAppendixInString = (s: string) => {
  if (!s.includes('BlogAppendix!:start'))
    return s
  const x = s.split('BlogAppendix!:start')[0] as string
  const y = s.split('BlogAppendix!:start')[1]!.split('BlogAppendix!:end')[1]

  return x + y
}

