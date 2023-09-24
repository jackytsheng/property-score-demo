import { ReactNode } from "react";

export const Wrapper = ({
    children,
}: {
    children: ReactNode
}) =>
(<div className="flex flex-col items-center justify-center p-8 md:px-24 md:pt-10" >
    {children}
</div>)