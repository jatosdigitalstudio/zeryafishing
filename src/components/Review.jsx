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
  
  export function CardReview({
    name,
    feedback,
    date,
    title,
  }) {
    return (
      <Card shadow={false}>
        <CardBody className="pt-0">
          <Rating value={4} className="text-amber-500" />
          <Typography
            variant="h6"
            color="blue-gray"
            className="font-bold mb-2 mt-1"
          >
            {title}
          </Typography>
          <Typography className="text-base font-normal !text-gray-500">
            {feedback}
          </Typography>
          <Typography
            variant="h6"
            color="blue-gray"
            className="font-medium mt-3"
          >
            {name}
          </Typography>
          <Typography
            variant="small"
            className="font-normal !text-gray-500"
          >
            {date}
          </Typography>
        </CardBody>
      </Card>
    );
  }
  
  const CONTENTS = [
    {
      title: "This tool has made my workflow seamless",
      name: "Ryan Samuel",
      feedback:
        "I've been using this for a while now, and it's become an essential part of my daily routine. It's incredibly user-friendly and has greatly improved my productivity.",
      date: "03 March 2024",
    },
    {
      title: "It's made my job so much easier",
      name: "Emma Roberts",
      feedback:
        "This tool has been a game-changer for me. From managing my tasks to collaborating with my team, it's made everything so much easier. Highly recommended!",
      date: "14 February 2023",
    },
    {
      title: "It's my go-to solution for staying organized.",
      name: "Bruce Mars",
      feedback:
        "I've been using this for a while now, and it's become an essential part of my daily routine. It's incredibly user-friendly and has greatly improved my productivity.",
      date: "10 February 2023",
    },
  ];
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
          {/* <Carousel className="rounded xl">
          <div className="mt-32 grid lg:grid-cols-3 grid-cols-1 gap-y-6">
            {CONTENTS.map(({ name, feedback, title, date }, index) => (
              <CardReview
                key={index}
                title={title}
                name={name}
                feedback={feedback}
                date={date}
              />
            ))}

          </div>
          </Carousel> */}

          <Slider {...settings} className="mt-8">
              {REVIEW.map((banner)=>(
                  <img key={banner.key} src={banner.image} className="rounded-lg lg:px-12"/>
              ))}
          </Slider>
          
        </div>
      </section>
    );
  }
  