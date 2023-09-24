'use client'
import Link from "next/link";
import { Route } from "./NavBar";
import { INPUT_STYLE } from "./style";
import Head from "next/head";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-24">
      <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900">Tell me about your dream property 🏡</label>
      <span className="italic text-sm mb-2 text-gray-900/50">Example: "Sunny, Spacious, 4 bedrooms, 2 bathrooms ..."</span>
      <textarea id="message" rows={4} maxLength={200} className={`${INPUT_STYLE} resize-none block`} placeholder="Write your thoughts here..."></textarea>
      <Link href={Route.SUMMARY} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Next</Link>
    </div>
  )
}
