import Link from "next/link"
import Image from "next/image"
import React from "react"
import {
    RiFacebookCircleFill,
    RiInstagramLine,
    RiLinkedinFill,
    RiMapPinLine,
    RiMessage2Line,
    RiPhoneLine,
    RiTwitterFill,
} from "react-icons/ri"

export default function Footer() {
    return (
        <footer className="bg-[#FAFAFA] mt-20" id="kontak">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-center text-secondary sm:justify-start">
                            <Link href={"/"} className="flex items-center gap-2 text-secondary text-xl font-semibold">
                                <Image 
                                    src="/Logo-zerya.png" 
                                    alt="Zerya Fishing" 
                                    width={80} 
                                    height={80}
                                />
                            </Link>
                        </div>

                        <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                            Zerya Fishing merupakan distributor toko pancing yang menyediakan 
                            berbagai macam kebutuhan alat pancing.
                        </p>

                        <ul className="mt-8 text-gray-500 flex justify-center gap-6 sm:justify-start md:gap-8">
                            <li>
                                <Link href="#">
                                    <RiFacebookCircleFill
                                        fontSize={26}
                                        className="text-secondary transition hover:text-secondary/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <RiInstagramLine
                                        fontSize={26}
                                        className="text-secondary transition hover:text-secondary/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <RiLinkedinFill
                                        fontSize={26}
                                        className="text-secondary transition hover:text-secondary/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <RiTwitterFill
                                        fontSize={26}
                                        className="text-secondary transition hover:text-secondary/75"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">Navigasi Menu</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                    Artikel
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                    Testimonial
                                </Link>
                            </li>
                        </ul>
                    </div>
                    

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">Kontak Kami</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                                <Link
                                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    href="/"
                                >
                                    <RiMessage2Line fontSize={18} className="text-gray-900" />

                                    <span className="flex-1 text-gray-700">info@zeryafishing.com</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    href="/"
                                >
                                    <RiPhoneLine fontSize={18} className="text-gray-900" />

                                    <span className="flex-1 text-gray-700">0813 1554 5152</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    href="/"
                                >
                                    <RiPhoneLine fontSize={18} className="text-gray-900" />

                                    <span className="flex-1 text-gray-700">0821 1439 0478</span>
                                </Link>
                            </li>

                            <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                <RiMapPinLine fontSize={18} className="text-gray-900"/>

                                <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                                    <Link href="https://g.co/kgs/PJ4aQkT" target="blank">
                                        Ruko Plaza D’Minimalist no. 9. Jl. Raya Hankam RT 006/005, Jatisampurna, Bekasi, Jawa barat 17432
                                    </Link>
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-300 pt-6">
                    <div className="text-center">
                        {/* <div className="text-sm text-gray-500 flex items-center gap-3">
                            <Link className="inline-block text-secondary transition hover:text-secondary/75" href="/">
                                Terms & Conditions
                            </Link>
                            <Link className="inline-block text-secondary transition hover:text-secondary/75" href="/">
                                Privacy Policy
                            </Link>
                        </div> */}

                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">&copy; 2025 Zerya Fishing. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

