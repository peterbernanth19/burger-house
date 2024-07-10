const Card = ({height, width, image}: {height: number, width: number | string, image: string}) => {
    return (
      <div className="p-4 rounded-xl" style={{ height, width }}>
        <div
          className="relative w-full h-full bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
            <h2 className="text-lg font-bold">TRY IT TODAY</h2>
            <h3 className="text-2xl font-bold mt-2">MOST POPULAR BURGER</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  