export const NOTION_API_SECRET = process.env.NOTION_API_SECRET || ''
export const DATABASE_ID = process.env.DATABASE_ID || ''

export const CUSTOM_DOMAIN = process.env.CUSTOM_DOMAIN || '' // <- Set your costom domain if you have. e.g. alpacat.com
export const BASE_PATH = process.env.BASE_PATH || '' // <- Set sub directory path if you want. e.g. /docs/

export const PUBLIC_GA_TRACKING_ID = import.meta.env.PUBLIC_GA_TRACKING_ID
export const NUMBER_OF_POSTS_PER_PAGE = 10
export const REQUEST_TIMEOUT_MS = parseInt(import.meta.env.REQUEST_TIMEOUT_MS || '30000', 10)

export const PUBLIC_SITE_TITLE = 'うきゅきゅ'
export const PUBLIC_SITE_DESCRIPTION = 'astro-notion-blog is generated statically by Astro'
