import type { ExtendedRecordMap } from 'notion-types/build/maps'
export {};

declare global {
  interface Appendix {
    hasAppendix: boolean
    prefix?: string
    ogImage?: string 
    postImage?: string 
  }
  interface PageInternal {
    category: 'article' | 'new' | 'opinion' | 'review' | 'other',
    title: string
    coverImage: string | null
    createdAt: string
    appendix?: Appendix
    emoji?: string
    previewText: string | null
    id: string
  }
  interface PageOfficialAPI {
    object: string
    id: string
    created_time: string
    last_edited_time: string
    created_by: { object: string; id: string }
    last_edited_by: { object: string; id: string }
    cover: { type: 'file' | 'external' }
    icon: { type: string; emoji: string }
    parent: { type: string; workspace: true }
    archived: false
    properties: { title: any }
    url: string
  }
  type PageRecordMap = ExtendedRecordMap
} 
