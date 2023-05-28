import Images from "../assets/image/Images";

export default function Ads() {
  return (
    <>
      <section className="bg-[url('./assets/image/Persuasive.png')] bg-no-repeat px-[30px] md:px-[64px] lg:px-[114px]">
        <div className="text-center text-white py-20">
          <h1 className="font-extrabold text-xl md:text-2xl lg:text-4xl font-manrope ">
            So? What Are You Waiting For
          </h1>
          <p className="font-medium text-lg md:text-xl lg:text-2xl font-manrope mt-4">
            It's time to build your career, study in a relaxed and purposeful
            manner
          </p>
          <div className="flex justify-center gap-10 mt-12">
            <button className="bg-primary hover:bg-primaryHover text-white px-7 md:px-9 lg:px-11 py-1 md:py-2 lg:py-4 rounded-lg font-manrope font-bold text-base md:text-lg lg:text-xl ">
              Get Started
            </button>
            <button className="bg-transparent hover:bg-slate-50 hover:bg-opacity-20 text-white px-7 md:px-9 lg:px-11 py-1 md:py-2 lg:py-4 rounded-lg font-manrope font-bold text-base md:text-lg lg:text-xl ">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
