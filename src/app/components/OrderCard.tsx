import Image from "next/image";

const OrderCard = ({ image }: {image: string}) => {
    return (
        <div className="flex flex-col items-center text-wrap" style={{ width:300 }}>
          <Image src={image} alt="Burger" width={300} height={200} />
          <Image src="/assets/images/Shadow1.png" alt="Burger" width={300} height={20} />
          <h1 className="mt-10 text-[#964B00] text-lg font-bold">LOREM IPSUM DOLOR</h1>
          <h5 className="mt-5 text-black text-lg">Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor Lorem Ipsum sit amet dolor</h5>
          <section className="mt-5 flex justify-center">
            <button className="p-3 bg-rose-700 text-white focus:outline-none">
              ORDER NOW
            </button>
          </section>
        </div>
    );
  };
  
  export default OrderCard;
  