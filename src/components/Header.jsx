'use client'

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from 'next/image'
function NavItem({ label, link}) {
  return (
    <a href={link}>
      <Typography as="li" color="black" className="p-1 font-medium">
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-5">
      <NavItem label="Beranda" link={'#Home'} />
      <NavItem label="Tentang Kami" link={'#About'} />
      <NavItem label="Blogs" link={'#Blogs'} />
      <NavItem label="Contact" link={'#Contact'} />
    </ul>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar color="transparent" fullWidth>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        {/* <Typography
          as="a"
          href="#"
          color="blue-gray"
          className="mr-4 cursor-pointer text-lg font-bold"
        >
          Zerya Fishing
        </Typography> */}
        <Image src="/Logo-zerya.png" width={80} height={80}/>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Button color="gray" className="hidden lg:inline-block">
          Shop Now
        </Button>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-white py-2">
          <NavList />
          <Button className="mb-2" fullWidth>
            Shop Now
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}