"use client"
import { Avatar, Link, Spacer } from '@chakra-ui/react'
import { ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'

const topics = [
  { id: "1", query: "ホワイトな仕事", author: "かずき", answer: "募集人数が少なく人があまり辞めてない会社" },
  { id: "2", query: "おすすめのインターン", author: "しのぶ", answer: "本選考直結" },
  { id: "3", query: "インターンの探し方", author: "たなか", answer: "先輩の口コミ" },
  { id: "4", query: "文系でエンジニア就活するコツ", author: "さとう", answer: "CSの基礎を大切にする" },
  { id: "5", query: "商社に向いてる人間性", author: "しらぼし", answer: "外交的", },
  { id: "6", query: "コンサル業界おすすめ", author: "のりみや", answer: "アクセンチュア" },
]

const TopicList = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 w-full pb-10 md:pb-0'>
      {topics.map(t => (
        <div key={t.id} className='flex flex-col items-center ring-1 ring-gray-50'>
          <div className="flex items-center p-2 space-x-2 w-full">
            <Avatar name={t.author} size="sm" /><div>{t.author}</div>
            <Spacer />
            <EllipsisHorizontalIcon className="w-5 h-5 text-gray-500" />
          </div>

          <div className="w-full p-2">
            <div className="text-gray-600 font-semibold">Q: {t.query}</div>
            <div className="text-gray-600"> {t.answer}</div>
          </div>


          <div className="flex flex-row justify-between items-center p-2 w-full">
            <div className="flex flex-row space-x-3 items-center">
              <button className="rounded-full p-[2px] bg-pink-50">
                <HandThumbUpIcon className='h-6 w-6 text-pink-300  ' />
              </button>
              <Link href='' className="text-gray-400 bg-gray-50 rounded-md p-1 text-sm">他〇〇件の回答</Link>
            </div>
            <button className="bg-white rounded-md p-1 text-gray-400 flex items-center ring-1 ring-gray-400">
              <ChatBubbleOvalLeftEllipsisIcon className='h-4 w-4 text-gray-400' />回答する</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default TopicList