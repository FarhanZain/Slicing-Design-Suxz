import Images from "../assets/image/Images";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col gap-5 sm:flex-row justify-between items-center mt-12 px-[30px] md:px-[64px] lg:px-[114px] 2xl:px-[256px]">
        <div className="sm:w-[300px] lg:w-[480px] 2xl:w-[580px] order-2 sm:order-1">
          <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl text-primary font-manrope font-bold">
            S U X Z M A K E I T E A S Y{" "} 
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-manrope font-extrabold mt-2">
            Find Your Way Of Success
          </h1>
          <p className="text-base lg:text-xl 2xl:text-2xl font-manrope font-medium mt-5">
            We help you to increase self-confidence and train yourself in a
            direction, and make you more creative in developing a work
          </p>
          <div className="flex gap-5 2xl:gap-10 mt-5">
            <button className="bg-primary hover:bg-primaryHover text-white px-8 lg:px-9 2xl:px-10 py-2 lg:py-2 2xl:py-3 rounded-lg font-manrope font-bold text-sm lg:text-base 2xl:text-xl ">
              Get Started
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-400 hover:text-gray-500 px-8 lg:px-9 2xl:px-10 py-2 lg:py-2 2xl:py-3 rounded-lg font-manrope font-bold text-sm lg:text-base 2xl:text-xl ">
              Our Services
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[400px] lg:w-[574px] 2xl:w-[750px] order-1 md:order-2">
          <img src={Images.hero} alt="Hero Photo" />
        </div>
      </section>
    </>
  );
}
