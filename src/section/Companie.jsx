import Images from "../assets/image/Images";

export default function Comapanie() {
  return (
    <>
      <section className="bg-[#F8F8FF] py-14 2xl:py-24 px-[30px] md:px-[64px] lg:px-[114px 2xl:px-[256px]">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-extrabold font-manrope">
            Companies That Recruit Our Graduates
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-medium font-manrope mt-5">
            Our graduates have worked in more than 400 companies around the
            World
          </p>
        </div>
        <div className="grid grid-cols-2 gap-14 lg:gap-10 2xl:gap-20 place-items-center mt-14 md:grid-cols-3 lg:grid-cols-4 lg:mx-60">
          <img src={Images.github} alt="Github" />
          <img src={Images.microsoft} alt="Microsoft" />
          <img src={Images.redis} alt="Redis" />
          <img src={Images.amazon} alt="Amazon" />
          <img src={Images.paypal} alt="Paypal" />
          <img src={Images.linkedin} alt="Linkedin" />
          <img src={Images.reddit} alt="Reddit" />
          <img src={Images.medium} alt="Medium" />
        </div>
      </section>
    </>
  );
}
