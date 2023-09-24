import { ReactNode } from "react";

export interface PillProps {
  children: ReactNode;
}

export const Pill = ({ children }: PillProps) => (
  <span className="mr-2 inline-flex items-center justify-between gap-2 rounded-full border border-gray-300 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400">
    {children}
  </span>
);
