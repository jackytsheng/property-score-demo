'use client'
import Image from "next/image"
import { SVG_STYLE } from "../style"
import { Pill } from "./Pill"

export interface PropertyCardProps {
    link: string
    src: string
    title: string
    description: string
}
export const PropertyCard = ({ link, src, title, description }: PropertyCardProps) =>
    <a href={link} target="__blank" className="mb-8 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image width={200} height={150} className="object-cover w-full rounded-t-lg max-h-60 md:h-80 md:w-48 md:rounded-none md:rounded-l-lg" src={src} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-20">{description}</p>
            <div className="flex gab-2">
                <Pill>
                    <svg className={SVG_STYLE} width="12px" height="12px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M5 10C3.347656 10 2 11.347656 2 13L2 26.8125C3.296875 25.6875 4.9375 24.777344 7 24.0625L7 20C7 17.339844 11.542969 17 15.5 17C19.457031 17 24 17.339844 24 20L24 22C24.335938 21.996094 24.65625 22 25 22C25.34375 22 25.664063 21.996094 26 22L26 20C26 17.339844 30.542969 17 34.5 17C38.457031 17 43 17.339844 43 20L43 24.03125C45.058594 24.742188 46.691406 25.671875 48 26.8125L48 13C48 11.347656 46.652344 10 45 10 Z M 25 24C5.90625 24 -0.015625 27.53125 0 37L50 37C50.015625 27.46875 44.09375 24 25 24 Z M 0 39L0 50L7 50L7 46C7 44.5625 7.5625 44 9 44L41 44C42.4375 44 43 44.5625 43 46L43 50L50 50L50 39Z" /></svg>
                    <span>4</span>
                </Pill>
                <Pill>
                    <svg className={SVG_STYLE} width="12px" height="12px" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3.5C2 2.11929 3.11929 1 4.5 1H6V2H7V0H4.5C2.567 0 1 1.567 1 3.5V7H0V8H1V9.5C1 11.2632 2.30385 12.7219 4 12.9646V15H5V13H10V15H11V12.9646C12.6961 12.7219 14 11.2632 14 9.5V8H15V7H2V3.5Z" />
                        <path d="M8 4H5V3H8V4Z" />
                    </svg>
                    <span>2</span>
                </Pill>
                <Pill>
                    <svg className={SVG_STYLE} width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2
		l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5
		s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z"/>
                        <rect fill="none" width="24" height="24" />
                    </svg>
                    <span>1</span>
                </Pill>
            </div>
        </div>
    </a>