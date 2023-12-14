import Parser from 'rss-parser'

export default defineEventHandler(async (event) => {
  if (event.context.params?.guid === undefined) {
    throw createError('Missing guid')
  }

  const parser = new Parser()
  const data = await parser.parseURL('https://feeds.simplecast.com/pXwyWZPn')

  if (data.items.length === 0) {
    throw createError('Feed not found')
  }

  const item = data.items.find((item) => item.guid === event.context.params?.guid)

  if (!item) {
    throw createError('Episode not found')
  }

  return {
    ...item,
    image: data.image?.url,
  }
})