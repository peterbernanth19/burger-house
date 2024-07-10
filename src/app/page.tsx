import Image from "next/image";
import Card from "./components/Card";
import OrderCard from "./components/OrderCard";

export default function Home() {
  return (
    <div>
      <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/bgcolor.png)' }}>
        <header className="flex justify-between py-8 px-10 bg-opacity-75">
          <Image src="/assets/images/logo.png" alt="Burger" width={300} height={200} />
          <div className="flex flex-col justify-end">
            <p className="text-black pb-5 text-end">Express Delivery +1 123 345 890</p>
            <ul className="flex space-x-8">
              <li className="text-black text-xl">Home</li>
              <li className="text-black text-xl">Menu</li>
              <li className="text-black text-xl">Our Story</li>
              <li className="text-black text-xl">Contact Us</li>
            </ul>
          </div>
        </header>
        <div className="relative">
          <Image src="/assets/images/burgerweek.png" alt="Burgerweek" layout="responsive" width={100} height={100} className="w-full" />
        </div>
      </div>
      <div className="flex p-20 space-x-4">
        <Card height={500} width={'50%'} image="/assets/images/burgerimage.png" />
        <div className="flex flex-col space-y-4 w-1/2">
          <Card height={240} image="/assets/images/BurgerImage3.png" />
          <Card height={240} image="/assets/images/burgerimage.png" />
        </div>
      </div>
      <section className="flex justify-center">
        <button className="p-3 bg-yellow-400 text-[#964B00] focus:outline-none text-lg font-bold">
          ALWAYS TASTY BURGER
        </button>
      </section>
      <div>
        <h1 className="mt-10 text-[#964B00] text-center text-lg font-bold">CHOOSE & ENJOY</h1>
      </div>
      <div className="flex justify-around mt-10">
        <OrderCard image="/assets/images/Burger1.png" />
        <OrderCard image="/assets/images/Burger2.png" />
        <OrderCard image="/assets/images/Burger1.png" />
      </div>
      <section className="p-20">
        <div className="p-10 flex shadow-2xl">
          <div className="w-1/2">
            <h1 className="mt-10 text-[#964B00] text-lg">DISCOVER</h1>
            <h1 className="text-[#964B00] text-lg font-bold">UPCOMING EVENTS</h1>
            <h5 className="mt-10 text-black text-lg">Lorem Ipsum sit amet dolor Lorem Ipsum sit t amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor</h5>
          </div>
          <div className="ml-10 w-1/2">
            <Image src="/assets/images/BurgerImage3.png" alt="Burgerweek" layout="responsive" objectFit="cover" width={50} height={100} />
          </div>
        </div>
      </section>
    </div>
  );
}
