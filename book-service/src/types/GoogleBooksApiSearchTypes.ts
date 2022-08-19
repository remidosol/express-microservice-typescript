export interface BookSearchTypes {
  kind: string
  totalItems: number
  items?: Item[]
}

export interface Item {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
}

export interface VolumeInfo {
  title: string
  authors: string[]
  publishedDate: string
  pageCount: number
  categories: string[]
  language: string
  imageLinks: ImageLinks
  previewLink: string
  infoLink: string
  subtitle?: string
  publisher?: string
  description?: string
}

export interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
}