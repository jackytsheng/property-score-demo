"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import HouseIcon from "../../public/assets/house-svgrepo-com.svg"
interface Page {
  text: string;
  route: string;
}
export const enum Route {
  HOME = '/',
  SUMMARY = '/summary',
  FEEDBACK = '/feedback',
  RESULT = '/result',
}

const initialPages: Page[] = [{
  text: "Home",
  route: Route.HOME,
},
{
  text: "Summary",
  route: Route.SUMMARY,
},
{
  text: "Result",
  route: Route.RESULT,
}, {
  text: "Feedback",
  route: Route.FEEDBACK,
}
]

export default function NavBar() {
  const [selectedPage, setSelectedPage] = useState<Page>({ text: "Home", route: Route.HOME })

  return (
    <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://google.com" className="flex items-center">
        <Image src={HouseIcon} className="pr-2" alt="House Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrapd">Property Score</span>
      </a>
      <div id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
          {initialPages.map(p => (
            <li key={p.route}>
              <Link key={p.route} href={p.route} className={`block py-2 pl-3 pr-4 rounded md:p-0 ${p.route == selectedPage.route ? "text-blue-700" : ""}`} aria-current="page" onClick={() => {
                setSelectedPage(p)
              }}>{p.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav >
  )
}
