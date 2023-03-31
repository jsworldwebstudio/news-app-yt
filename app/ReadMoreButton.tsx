"use client"

import { useRouter } from "next/navigation"

type Props = {
  article: Article
}

const ReadMoreButton = ({ article }: Props) => {
  const router = useRouter()

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")
    const url = `/article?${queryString}`
    // console.log(url)
    router.push(url)
  }

  return (
    <button
      onClick={handleClick}
      className="flex flex-col w-full h-10 mt-auto bg-orange-400 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
      <span className="flex mx-auto my-auto font-medium">Read More...</span>
    </button>
  )
}

export default ReadMoreButton