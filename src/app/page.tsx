'use client'
import Link from "next/link";
import { Route } from "./NavBar";
import { HEADER_STYLE } from "./style";
import { Textarea } from "./components/Textarea";
import { Wrapper } from "./components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <label htmlFor="input-prompt" className={HEADER_STYLE}>Tell me about your dream property 🏡</label>
      <span className="italic text-sm mb-2 text-gray-400 dark:text-gray-600">Example: &#34;Sunny, Spacious, 4 bedrooms, 2 bathrooms ...&#34;</span>
      <Textarea id="input-prompt" placeholder={"Write your thoughts here..."} />
      <Link href={Route.SUMMARY} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Generate Summary</Link>
    </Wrapper>
  )
}
