"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useScrollPosition} from "../hooks/useScrollPosition";
import NavItems from "./NavItems";
import useCurrentBreakpoint from "@/hooks/useCurrentBreakpoint";
import MenuIcon from "./MenuIcon";
import {useState} from "react";
import CloseIcon from "./CloseIcon";

const Modal = ({close}) => {
    return (
        <div className="absolute inset-0 z-30 h-screen w-screen bg-white p-5">
            <div className="flex w-full justify-end">
                <button
                    onClick={() => {
                        close(false);
                    }}
                    className="transition-all hover:bg-papyrus"
                >
                    <CloseIcon className="h-14 w-14"/>
                </button>
            </div>
            <NavItems openModal={close}/>
        </div>
    );
};

const Navbar = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    const scrollPosition = useScrollPosition();
    const inverse_lang = usePathname().includes("/hu") ? "ro" : "hu";
    const lang = usePathname().includes("/hu") ? "hu" : "ro";

    const breakpoint = useCurrentBreakpoint();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className={classNames(
                scrollPosition > 0
                    ? "border-b-2 border-black bg-white py-3"
                    : "bg-transparent py-10",
                "sticky top-0 z-30 px-5 transition-all md:px-28"
            )}
            
        >
            {isOpen && <Modal close={setIsOpen}/>}

            <section className="flex items-center">

                <Link href={`/${lang}/`}>
                    <img
                        alt=""
                        src={`/assets/images/logo_${lang}.png`}
                        className={classNames(
                            scrollPosition > 0
                                ? "w-[50px] md:w-[100px]"
                                : "w-[100px] md:w-[150px]",
                            "transition-all",
                        )}
                    />
                </Link>

                <div className="flex-grow"/>

                {breakpoint != "sm" && breakpoint != "xs" && <NavItems openModal={setIsOpen}/>}

                <div className="flex-grow"/>

                <Link href={`/${inverse_lang}/`}>
                    {inverse_lang === "hu" ? (
                        <img src="/assets/images/flag_hu.png" alt="HU" className="h-6 w-auto"/>
                    ) : (
                        <img src="/assets/images/flag_ro.png" alt="RO" className="h-6 w-auto"/>
                    )}
                </Link>

                {(breakpoint == "sm" || breakpoint == "xs") && (
                    <button
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        <MenuIcon className="ml-2 h-14 w-14 transition-all hover:bg-papyrus"/>
                    </button>
                )}

            </section>
        </nav>
    );
};
export default Navbar;