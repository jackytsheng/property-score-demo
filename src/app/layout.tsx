'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import { ThemeToggler } from './components/ThemeToggler'
import { useState } from 'react'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <Head>
        <title>Property Scoring</title>
        <meta property="og:title" content="Property Scoring" key="title" />
      </Head>
      <body className={inter.className}>
        <main className='h-screen dark:bg-gray-800 overflow-scroll'>
          <NavBar />
          <ThemeToggler isDark={isDarkMode} toggle={setIsDarkMode} />
          {children}
        </main>
      </body>
    </html>
  )
}
