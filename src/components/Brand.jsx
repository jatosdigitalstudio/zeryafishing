'use client'
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { BRAND_LOGO } from "@/libs/data";
export default function Brand() {
  return (
    <section id="brand" className="py-8 px-8 lg:py-20">
      <div className="container !mx-auto text-center place-content-center grid">
        <Typography
          color="blue-gray"
          variant="lead"
          className="!font-semibold lg:!text-lg !text-base"
        >
        Lebih dari 30+ brand mempercayai kami
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="my-4 !text-2xl !leading-snug mb-10 lg:!text-3xl"
        >
          Trusted by Leading Brands
        </Typography>
       
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-5 gap-6">
            {
              BRAND_LOGO.map((data) => (
                <Image
                  key={data}
                  src={data.image}
                  alt="logo"
                  width={300}
                  height={100}
                />
                // <Card key={data} shadow={false} className="bg-[#FAFAFA] px-10">
                //   <CardBody>
                //     <Image
                //       src={data.image}
                //       alt="logo"
                //       width={300}
                //       height={100}
                //     />
                //   </CardBody>
                // </Card>
              ))
            }
          </div>
        </div>
      </div>
      {/* <Button className="mt-6 mx-auto flex" variant="outlined">Lihat Semua Brand</Button> */}
    </section>
  );
}