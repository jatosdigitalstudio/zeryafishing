'use client'
import { Typography, Card, CardBody } from "@material-tailwind/react";

function ContentCard({ img, title, desc }) {
  return (
    <Card
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />
      <CardBody className="relative flex flex-col justify-end">
        <Typography variant="h5" color="white" className="font-bold">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          color="white"
          className="my-2 font-normal"
        >
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

const contents = [
  {
    img: "https://plus.unsplash.com/premium_photo-1726848057778-a87a90c6be3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tips Membeli Alat Pancing",
    desc: " Membeli alat pancing yang tepat adalah langkah pertama menuju pengalaman memancing yang sukses",
  },
  {
    img: "https://images.unsplash.com/photo-1614000403069-8b368185db9f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kualitas Mempengaruhi Harga",
    desc: "Penjelasan mengapa harga dan kualitas sering berjalan seiring",
  },
  {
    img: "https://images.unsplash.com/photo-1588623421822-cfe216893703?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaGluZyUyMHJvZHxlbnwwfDF8MHx8fDA%3D",
    title: "Tips Merawat Alat Pancing",
    desc: "Merawat alat pancing dengan baik adalah kunci agar tetap awet",
  },
];

export default function Blogs() {
  return (
    <section className="container mx-auto px-8 py-10 lg:py-28" id="artikel">
      <Typography
        variant="h2"
        color="blue-gray"
        className="!text-2xl !leading-snug lg:!text-3xl"
      >
        Tips dan Inspirasi Memancing
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 max-w-lg !font-normal !text-gray-500"
      >
        Tingkatkan keahlian memancing Anda dengan tips dari para ahli. Baca artikel terbaru kami 
        tentang teknik memancing, peralatan terbaik, dan tempat memancing favorit di Indonesia.
      </Typography>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {contents.map(({ img, title, desc }) => (
          <ContentCard key={title} img={img} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
}
