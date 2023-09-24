import { ReactNode } from "react"

export interface PillProps {
    children: ReactNode
}

export const Pill = ({ children }: PillProps) => <span className="gap-2 rounded-full justify-between bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-600">
    {children}
</span>