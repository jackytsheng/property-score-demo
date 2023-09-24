"use client";
import Link from "next/link";
import { Route } from "./NavBar";
import { HEADER_STYLE } from "./style";
import { Textarea } from "./components/Textarea";
import { Wrapper } from "./components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <label htmlFor="input-prompt" className={HEADER_STYLE}>
        Tell me about your dream property 🏡
      </label>
      <span className="mb-2 text-sm italic text-gray-400 dark:text-gray-600">
        Example: &#34;Sunny, Spacious, 4 bedrooms, 2 bathrooms ...&#34;
      </span>
      <Textarea id="input-prompt" placeholder={"Write your thoughts here..."} />
      <Link
        href={Route.SUMMARY}
        type="button"
        className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        Generate Summary
      </Link>
    </Wrapper>
  );
}
