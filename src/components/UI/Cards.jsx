'use client'
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Cards({icons,title, text}) {
    return (
      <div className="p-4 w-96">
        <CardBody className="text-blue-gray-900">
          {icons}
          <Typography variant="h5" color="blue-gray" className="my-2">
           {title}
          </Typography>
          <Typography className="!text-gray-500">
            {text}
          </Typography>
        </CardBody>
      </div>
    );
  }