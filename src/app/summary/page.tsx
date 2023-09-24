"use client";
import Link from "next/link";
import { Route } from "../NavBar";
import { Pill } from "../components/Pill";
import { Textarea } from "../components/Textarea";
import { Wrapper } from "../components/Wrapper";
import { BUTTON_STYLE, HEADER_STYLE, SVG_STYLE } from "../style";

export default function Summary() {
  return (
    <Wrapper>
      <label id="summary-prompt" className={HEADER_STYLE}>
        Is this what you are looking for?{" "}
      </label>
      <span className="mb-2 text-sm italic text-gray-400 dark:text-gray-600">
        If not, please click &#34;Resubmit&#34; after edit.
      </span>
      <Textarea
        text="School zone, Sunny, Near Garden, Spacious, 4 bedrooms, 2 bathrooms, 1 Carpark"
        id="summary-prompt"
        placeholder="Please enter your description ..."
      />
      <div className="mb-4 flex gap-4">
        <Pill>
          <svg
            className={SVG_STYLE}
            width="12px"
            height="12px"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M5 10C3.347656 10 2 11.347656 2 13L2 26.8125C3.296875 25.6875 4.9375 24.777344 7 24.0625L7 20C7 17.339844 11.542969 17 15.5 17C19.457031 17 24 17.339844 24 20L24 22C24.335938 21.996094 24.65625 22 25 22C25.34375 22 25.664063 21.996094 26 22L26 20C26 17.339844 30.542969 17 34.5 17C38.457031 17 43 17.339844 43 20L43 24.03125C45.058594 24.742188 46.691406 25.671875 48 26.8125L48 13C48 11.347656 46.652344 10 45 10 Z M 25 24C5.90625 24 -0.015625 27.53125 0 37L50 37C50.015625 27.46875 44.09375 24 25 24 Z M 0 39L0 50L7 50L7 46C7 44.5625 7.5625 44 9 44L41 44C42.4375 44 43 44.5625 43 46L43 50L50 50L50 39Z" />
          </svg>
          <span>4</span>
        </Pill>
        <Pill>
          <svg
            className={SVG_STYLE}
            width="12px"
            height="12px"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 3.5C2 2.11929 3.11929 1 4.5 1H6V2H7V0H4.5C2.567 0 1 1.567 1 3.5V7H0V8H1V9.5C1 11.2632 2.30385 12.7219 4 12.9646V15H5V13H10V15H11V12.9646C12.6961 12.7219 14 11.2632 14 9.5V8H15V7H2V3.5Z" />
            <path d="M8 4H5V3H8V4Z" />
          </svg>
          <span>2</span>
        </Pill>
        <Pill>
          <svg
            className={SVG_STYLE}
            width="15px"
            height="15px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2
		l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5
		s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z"
            />
            <rect fill="none" width="24" height="24" />
          </svg>
          <span>1</span>
        </Pill>
      </div>
      <div className="inline-flex w-4/5 flex-col items-stretch gap-2 md:w-auto md:flex-row md:items-center md:gap-5">
        <Link href="#" type="button" className={BUTTON_STYLE}>
          Resubmit
        </Link>
        <Link href={Route.RESULT} type="button" className={BUTTON_STYLE}>
          Generate Result
        </Link>
      </div>
    </Wrapper>
  );
}
