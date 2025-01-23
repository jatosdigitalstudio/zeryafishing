'use client'
import { Button, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="mt-10 py-10 px-6" id="shopping">
      <div className="container mx-auto flex !w-full max-w-6xl flex-col !items-center justify-center rounded-2xl bg-black bg-[url(/About-img.jpg)] bg-cover bg-blend-overlay bg-center px-10 py-20">
        <Typography
          className="text-center text-2xl font-bold md:text-3xl "
          color="white"
        >
        Klik, Checkout, Pancingan Siap!
        </Typography>
        <Typography
          color="white"
          className="my-3 text-center !text-base md:w-7/12"
        >
          Temukan koleksi terbaik kami di Tokopedia, Shopee dan Bukalapak. 
          Yuk, mulai petualangan memancingmu sekarang!
        </Typography>
        <div className="mt-8 flex w-full flex-col gap-3 md:w-fit md:flex-row">
          <Button size="md" className="bg-[#42B549] flex-shrink-0 ">
            <Link href="https://www.tokopedia.com/bospancing" className="">
              Tokopedia
            </Link>
          </Button>
          <Button size="md" className="bg-[#E9552B] flex-shrink-0">
            <Link href="https://shopee.co.id/bhetysyailendra?sortBy=sales&tab=1" className="">
              Shopee
            </Link>
          </Button>
          <Button size="md" className="bg-[#DD094B] flex-shrink-0">
            <Link href="https://www.bukalapak.com/u/zerya_fishing" className="">
              Bukalapak
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}