'use client'
import { Typography, Button } from "@material-tailwind/react";
 
export default function Hero() {
  return (
    <div className="h-[85vh]">
      <div className="relative h-full w-full">
        <img
          src="https://www.sportfishingmag.com/uploads/2021/09/7-dsc_0038.jpg"
          alt="Woman Fishing Anglers"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/35">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="lead"
              color="white"
              className="opacity-80"
            >
             Welcome to
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="font-black mb-8 text-3xl md:text-4xl lg:text-5xl !leading-snug"
            >
              Zerya Fishing <br /> a.k.a Bos Pancing
            </Typography>
            
            <div className="flex gap-2">
              <Button size="md" className="bg-primary">
                Belanja Sekarang
              </Button>
              <Button size="md" color="white" variant="text">
                Galeri
              </Button>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}