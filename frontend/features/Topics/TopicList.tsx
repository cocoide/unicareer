"use client"
import { Avatar, Link } from '@chakra-ui/react'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'

const topics = [
  { id: "1", title: "とりあえずホワイトな仕事", author: "かずき" },
  { id: "2", title: "おすすめのインターン", author: "しのぶ" },
  { id: "3", title: "インターンの探し方", author: "たなか" },
  { id: "4", title: "文系でエンジニア就活するコツ", author: "さとう" },
  { id: "5", title: "商社に行きたい人", author: "しらぼし" },
  { id: "6", title: "コンサル業界の評判", author: "のりみや" },
]

const TopicList = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-full'>
      {topics.map(t => (
        <div key={t.id} className='shadow-md ring-1 ring-gray-200 h-[300px] w-full rounded-md flex flex-col items-center'>
          <div className="flex items-center mr-auto p-2 space-x-2">
            <Avatar name={t.author} size="sm" /><div>{t.author}</div>
          </div>

          <div className="font-bold bg-neutral text-gray-700 w-full h-[220px] flex items-center justify-center"
          > {t.title}</div>

          <div className="flex flex-row justify-between items-center p-2 w-full">
            <div className="flex flex-row space-x-3 items-center">
              <Link href='' className="text-gray-500">〇〇件の回答</Link>
            </div>
            <button className="bg-gray-400 rounded-md p-1 text-white flex items-center ">
              <ChatBubbleOvalLeftEllipsisIcon className='h-4 w-4 text-white' /> 回答する</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default TopicList