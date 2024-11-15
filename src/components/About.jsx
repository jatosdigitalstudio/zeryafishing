'use client'
import { Typography } from "@material-tailwind/react"
import Image from 'next/image'

export default function About() {
    return (
       <section className="flex flex-col max-w-[1440px] p-10 mx-auto items-center lg:px-20 xl:max-h-[700px] lg:py-20 xl:flex-row">
        <div className="realtive flex flex-1 flex-col xl:w-1/2 mb-4 ">
            <Typography 
                variant="h1"
                className="text-primary !font-extrabold mb-10 text-[28px] lg:text-[40px]"
            > Tentang Kami
            </Typography>
            <Typography
                variant="lead"
                className="!text-gray-500 text-[18px]"
            >
            <span className="font-extrabold text-black">Zerya Fishing</span> merupakan distributor toko pancing yang menyediakan berbagai macam kebutuhan alat pancing mulai dari reel, line, joran aksesoris hingga kebutuhan pendukung untuk memancing.    <br /> <br />  Kami melayani pembelian produk secara grosir maupun eceran. <br /><br />             Produk yang kami sediakan sangat beragam dari berbagai brand yang dapat para pemancing temukan sesuai kebutuhan.
            </Typography> 
        </div>
        <div className="relative flex flex-col my-4 xl:w-1/2 items-center lg:items-end justify-center">
            <Image src="/About-img.jpg" width={500} height={500} className="rounded-xl"/>
        </div>
       </section>
    )
}