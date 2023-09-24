import { ReactNode } from "react";

export const Wrapper = ({
    children,
}: {
    children: ReactNode
}) =>
(<div className="flex flex-col items-center justify-center p-10 md:p-24" >
    {children}
</div>)