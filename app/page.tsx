import { categories } from "@/constants"
import fetchNews from "@/utils/fetchNews"
import NewsList from "./NewsList"
// import response from '../response1.json'

async function Home() {
  const news: NewsResponse = await fetchNews(categories.join(','))
  // const news: NewsResponse = response || await fetchNews(categories.join(','))

  // set timeout for 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000))
  // console.log(news)

  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default Home
