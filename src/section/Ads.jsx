import Images from "../assets/image/Images";

export default function Ads() {
  return (
    <>
      <section className="bg-[url('./assets/image/Persuasive.png')] bg-no-repeat bg-cover px-[30px] md:px-[64px] lg:px-[114px] 2xl:px-[256px]">
        <div className="text-center text-white py-20 2xl:py-32">
          <h1 className="font-extrabold text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-manrope ">
            So? What Are You Waiting For
          </h1>
          <p className="font-medium text-base md:text-lg lg:text-xl 2xl:text-2xl font-manrope mt-4">
            It's time to build your career, study in a relaxed and purposeful
            manner
          </p>
          <div className="flex justify-center gap-10 mt-12">
            <button className="bg-primary hover:bg-primaryHover text-white px-8 lg:px-9 2xl:px-10 py-2 lg:py-2 2xl:py-3 rounded-lg font-manrope font-bold text-sm lg:text-base 2xl:text-xl ">
              Get Started
            </button>
            <button className="bg-transparent hover:bg-slate-50 hover:bg-opacity-20 text-white px-8 lg:px-9 2xl:px-10 py-2 lg:py-2 2xl:py-3 rounded-lg font-manrope font-bold text-sm lg:text-base 2xl:text-xl ">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
