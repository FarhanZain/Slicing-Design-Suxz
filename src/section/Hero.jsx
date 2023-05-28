import Images from "../assets/image/Images";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col gap-5 sm:flex-row justify-between items-center mt-12 px-[30px] md:px-[64px] lg:px-[114px]">
        <div className="sm:w-[300px] lg:w-[480px] order-2 sm:order-1">
          <p className="text-base md:text-lg lg:text-xl text-primary font-manrope font-bold">
            S U X Z M A K E I T E A S Y{" "}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-extrabold mt-2">
            Find Your Way Of Success
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-manrope font-medium mt-5">
            We help you to increase self-confidence and train yourself in a
            direction, and make you more creative in developing a work
          </p>
          <div className="flex gap-10 mt-5">
            <button className="bg-primary hover:bg-primaryHover text-white px-7 md:px-9 lg:px-11 py-1 md:py-2 lg:py-4 rounded-lg font-manrope font-bold text-sm md:text-base lg:text-xl ">
              Get Started
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-400 hover:text-gray-500 px-7 md:px-9 lg:px-11 py-1 md:py-2 lg:py-4 rounded-lg font-manrope font-bold text-sm md:text-base lg:text-xl ">
              Our Services
            </button>
          </div>
        </div>
        <div className="w-[300px] sm:w-[400px] lg:w-[574px] order-1 md:order-2">
          <img src={Images.hero} alt="Hero Photo" />
        </div>
      </section>
    </>
  );
}
