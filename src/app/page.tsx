import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[60vh] w-[90%] mx-auto flex flex-1 items-center justify-between bg-green-50 font-sans dark:bg-black">
      <div>
        <h1 className="text-5xl font-sans">Drive your journey with confidence.</h1>
        <p>Reliable and affordable car rental service offering a wide range of vehicles for every need—from city rides to long trips. <br/>
          Easy booking, flexible plans, and well-maintained cars to ensure a smooth and comfortable experience.</p>
        <button className="">
          See The Store
        </button>
      </div>
      <Image  src="/carRental.jpg" alt="carRental" width={600} height={600} />
    </div>
  );
}
