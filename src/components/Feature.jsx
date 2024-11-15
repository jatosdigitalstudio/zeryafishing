'use client'
import Cards from "./UI/Cards"
import {
    Card,
  } from "@material-tailwind/react";
import {ShieldCheckIcon} from '@heroicons/react/24/solid'

export default function Feature() {
    const FEATURES = [
        {
            title: 'Original',
            text :'Produk pancing favorit yang tersedia di toko kami merupakan produk original',
            icon : (<ShieldCheckIcon className="h-10 w-10 text-blue-gray-900"/>)
        },
        {
            title: 'Pelayanan',
            text :'Zerya Fishing melayani pembelian eceran maupun pembelian grosir',
            icon : (<ShieldCheckIcon className="h-10 w-10 text-blue-gray-900"/>)
        },
        {
            title: 'Terlengkap',
            text :'One Stop Fishing Tackel Market, semua kelengkapan alat pancing ada disini',
            icon : (<ShieldCheckIcon className="h-10 w-10 text-blue-gray-900"/>)
        },
        {
            title: 'Terjangkau',
            text :'Harga yang kami berikan terjangkau, hingga dapat bersaing dengan toko lain',
            icon : (<ShieldCheckIcon className="h-10 w-10 text-blue-gray-900"/>)
        }
    ]
    return (
        <Card className="max-w-[90%] mx-auto mt-[-60px]">
            <div className="flex">
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
                {FEATURES.map(({title,text,icon},key) => (
                    <Cards 
                        icons={icon}
                        title={title}
                        text={text}
                        key={key}  
                    />
                
                ))}
            </div>
            </div>
           
        </Card>
        
    )
}