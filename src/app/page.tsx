import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/bgcolor.png)' }}>
        <header className="flex justify-between py-8 px-10 bg-opacity-75">
          <Image src="/assets/images/logo.png" alt="Burger" width={300} height={200} />
          <div className="flex flex-col justify-end">
            <p className="text-black pb-5">Express Delivery +1 123 345 890</p>
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
      <div className="flex flex-wrap p-20 space-x-4">
        <Card height={500} width={'50%'} image="/assets/images/burgerimage.png" />
        <div className="flex flex-col space-y-4">
          <Card height={240} width={500} image="/assets/images/burgerimage.png" />
          <Card height={240} width={500} image="/assets/images/burgerimage.png" />
        </div>
      </div>
    </div>
  );
}
