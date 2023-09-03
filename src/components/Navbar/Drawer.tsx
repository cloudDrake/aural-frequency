import React from "react";

interface IProps {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
export default function Drawer({ children, isOpen, setIsOpen }: IProps) {
    return (
        <main
            className={
                "absolute overflow-hidden z-10 bg-opacity-25 inset-0 transform ease-in-out v-max" +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 -translate-x-full  ")
            }
        >
            <section
                className={
                    " w-screen max-w-lg left-0 absolute bg-slate-900 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " -translate-x-full ")
                }
            >
                <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 h-full">
                    {children}
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}