import { useState } from "react";
import Card from "./Card";
import ShopCart from "./ShopCart";

export default function Shop() {
  const [shoeses , setShoeses] = useState([
    {name: "Name Shoes" , price: 12 , url: "../../src/img/shoes1.png" , count: 0, cap: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam alias quae iusto eum dolores ips" , id: 1},
    {name: "Name Shoes" , price: 15 , url: "../../src/img/shoes2.png" , count: 0  , cap: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam alias quae iusto eum dolores ips" , id: 2},
    {name: "Name Shoes" , price: 10 , url: "../../src/img/shoes3.png" , count: 0, cap: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam alias quae iusto eum dolores ips" , id: 3},
    {name: "Name Shoes" , price: 13 , url: "../../src/img/shoes4.png" , count: 0, cap: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam alias quae iusto eum dolores ips" , id: 4},
  ])
  return (
    <div className="bg-slate-500 min-h-[100vh] pb-10">
        <h1 className="pt-32 mb-16 text-2xl font-bold text-center">
          SHOES SHOP
        </h1>
        <Card shoeses={shoeses} setShoeses={setShoeses} />
        <ShopCart data={shoeses} setShoeses={setShoeses} />
    </div>
  )
}
