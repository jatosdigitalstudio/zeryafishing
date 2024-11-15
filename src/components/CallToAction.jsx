'use client'
import { Button, Input, Typography } from "@material-tailwind/react";

export default function CTA() {
  return (
    <section className="mt-10 p-10">
      <div className="container mx-auto flex !w-full max-w-6xl flex-col !items-center justify-center rounded-2xl bg-gray-900 px-6 py-16">
        <Typography
          className="text-center text-2xl font-bold md:text-3xl "
          color="white"
        >
          Be the first who see the news
        </Typography>
        <Typography
          color="white"
          className="my-3 text-center !text-base md:w-7/12"
        >
          Your company may not be in the software business, but eventually, a
          software company will be in your business.
        </Typography>
        <div className="mt-2 flex w-full flex-col gap-3 md:w-fit md:flex-row">
          <Input label="Email" color="white" />
          <Button color="white" size="md" className="flex-shrink-0">
            button
          </Button>
        </div>
      </div>
    </section>
  );
}