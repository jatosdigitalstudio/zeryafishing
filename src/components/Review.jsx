'use client'

import {
    Card,
    CardBody,
    Rating,
    Typography,
    Carousel
  } from "@material-tailwind/react";

import Slider from "react-slick";
import { REVIEW } from "@/libs/data";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
  
export default function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section id="review" className="py-20 px-8">
      <div className="mx-auto container">
        <div className="text-center">
          <Typography variant="h6" className="mb-3 uppercase text-grey">
            Reviews
          </Typography>
          <Typography variant="h3" className="text-primary font-bold">Our Customer&apos;s Opinion</Typography>
          <Typography className="mt-3 text-center text-[18px] font-normal text-gray-500">
            From general feedback to detailed accounts, find out why our users
            love our product.
          </Typography>
        </div>

        <Slider {...settings} className="mt-8">
            {REVIEW.map((banner)=>(
                <img key={banner.key} src={banner.image} className="rounded-lg lg:px-12" alt="Review Zerya Fishing"/>
            ))}
        </Slider>
        
      </div>
    </section>
  );
}
  