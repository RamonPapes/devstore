import Link from "next/link";
import Image from "next/image";
import CardWidget from "./cart-widget";
import { SearchForm } from "./search-form";

export default function Header() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex place-items-center gap-5">
                <Link href="/" className="text-2xl font-extrabold text-white">
                    devstore
                </Link>
                <SearchForm />

            </div>
            <div className="flex items-center gap-4">
                <CardWidget />

                <div className="w-px h-4 bg-zinc-500"></div>

                <Link href="/" className="flex items-center gap-2 hover:underline">
                    <span className="text-sm"> Account</span>
                    <Image src="https://github.com/RamonPapes.png" className="h-6 w-6 rounded-full" width={24} height={24} alt=""></Image>
                </Link>
            </div>
        </div >
    )
}