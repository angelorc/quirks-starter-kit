import Parser from 'rss-parser'

export default defineEventHandler(async (event) => {
  const parser = new Parser()
  const data = await parser.parseURL('https://feeds.simplecast.com/pXwyWZPn')

  return {
    title: data.title,
    description: data.description,
    image: data.image,
    episodes: data.items.map((item) => ({
      guid: item.guid,
      episode: item.itunes.episode,
      duration: item.itunes.duration,
      title: item.title,
      content: item.content,
      link: item.link,
      pubDate: item.pubDate,
      enclosure: item.enclosure,
    })),
  }
})