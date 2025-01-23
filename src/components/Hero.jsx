'use client'
import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-[85vh]">
      <div className="relative h-full w-full ">
        <img
          src="https://www.sportfishingmag.com/uploads/2021/09/7-dsc_0038.jpg"
          alt="Woman Fishing Anglers"
          className="h-full w-full object-cover object-[70%_75%]"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-[70%] pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="lead"
              color="black"
              className="opacity-80"
            >
             Selamat Datang di
            </Typography>
            <Typography
              variant="h1"
              color="black"
              className="font-black mb-8 text-3xl md:text-4xl lg:text-5xl !leading-snug"
            >
              Zerya Fishing <br /> a.k.a Bos Pancing
            </Typography>
            
            <div className="flex flex-col lg:flex-row items-start gap-2">
              <Button size="md" className="bg-primary">
                <Link href="/#shopping" scroll>
                  Belanja Sekarang
                </Link>
              </Button>
              <Button size="md" color="black" variant="text">
                Galeri
              </Button>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}