import NewsList from "@/app/NewsList"
import fetchNews from "@/utils/fetchNews"
import { categories } from "@/constants"
// import response from '../../../response1.json'

type Props = {
  params: { category: Category }
}

async function NewsCategory({ params: { category } }: Props ) {
  const news: NewsResponse = await fetchNews(category)
  // const news: NewsResponse = response || await fetchNews(category)

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  )
}

export default NewsCategory

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }))
}