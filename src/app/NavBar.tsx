"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HouseIcon from "../../public/assets/house-svgrepo-com.svg";
import { MODAL_STYLE } from "./style";
interface Page {
  text: string;
  route: string;
}
export const enum Route {
  HOME = "/",
  SUMMARY = "/summary",
  FEEDBACK = "/feedback",
  RESULT = "/result",
}

const initialPages: Page[] = [
  {
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
  },
  {
    text: "Feedback",
    route: Route.FEEDBACK,
  },
];

export default function NavBar() {
  const [menuOpened, setMenuOpened] = useState<boolean>(true);

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="https://google.com" className="flex items-center">
          <Image src={HouseIcon} className="mr-3 h-8" alt="House Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Property Score
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMenuOpened((opened: boolean) => !opened)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${menuOpened ? "hidden" : ""} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className={`${MODAL_STYLE} flex flex-col md:flex-row`}>
            {initialPages.map((p) => (
              <li key={p.route}>
                <Link
                  key={p.route}
                  href={p.route}
                  className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  aria-current="page"
                >
                  {p.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
