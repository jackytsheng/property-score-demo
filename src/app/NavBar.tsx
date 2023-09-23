"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import HouseIcon from "../../public/assets/house-svgrepo-com.svg"
interface Page {
  text: string;
  route: string;
  current: boolean;
}

const initialPages: Page[] = [{
  text: "Home",
  route: "/",
  current: true,
},
{
  text: "Summary",
  route: "/summary",
  current: false,
},
{
  text: "Result",
  route: "/result",
  current: false,
}, {
  text: "Feedback",
  route: "/feedback",
  current: false,
}
]

export default function NavBar() {
  const [pages, setPages] = useState<Page[]>(initialPages)
  const onClickPage = (curPage: Page) => {
    setPages(initialPages.map((page: Page) => ({ ...page, current: curPage.route === page.route })))
  }
  return (
    <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://google.com" className="flex items-center">
        <Image src={HouseIcon} className="pr-2" alt="House Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrapd">Property Score</span>
      </a>
      <div id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
          {pages.map(p => (
            <li key={p.route}>
              <Link key={p.route} href={p.route} className={`block py-2 pl-3 pr-4 rounded md:p-0 ${p.current ? "text-blue-700" : ""}`} aria-current="page" onClick={() => {
                onClickPage(p)
              }}>{p.text}</Link>
            </li>
          ))}
        </ul>
      </div>

    </nav >
  )
}
