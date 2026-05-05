import Button from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[60vh] w-[90%] mx-auto flex  items-center justify-between gap-25 font-sans ">
      <div className="flex-1">
        <h1 className="text-7xl font-sans bg-gradient-to-b from-green-500 to-black/80 dark:to-white bg-clip-text text-transparent font-bold">Drive your journey with confidence.</h1>
        <p  className="font-light text-md py-6">Reliable and affordable car rental service offering a wide range of vehicles for every need—from city rides to long trips. <br/>
          Easy booking, flexible plans, and well-maintained cars to ensure a smooth and comfortable experience.</p>
          <Button  name="See The Store" url="/store"/>
      </div>
      <div className="flex-1">
      <Image  src="/pngegg.png" alt="carRental" width={600} height={800} className="object-cover w-[100%]  h-[100%]" />
      </div>
    </div>
  );
}
