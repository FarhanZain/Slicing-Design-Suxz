import Images from "../assets/image/Images";

export default function About() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-start px-[30px] md:px-[64px] lg:px-[114px] 2xl:px-[256px] py-10 md:py-12 lg:pt-16 2xl:pt-28">
        <div className="lg:w-[500px] 2xl:w-[800px]">
          <img src={Images.about} alt="About Photo" />
        </div>
        <div className="lg:w-[470px] 2xl:w-[600px] flex flex-col gap-6 justify-between">
          <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl text-primary font-manrope font-bold">
            ABOUT US{" "}
          </p>
          <h1 className="text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-manrope font-extrabold">
            We Help Improve Your Work Experience
          </h1>
          <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-manrope font-medium">
            We help you to increase self-confidence and train yourself in a
            direction.
          </p>
          <div className="">
            <div className="flex items-center gap-6">
              <img src={Images.check} alt="" />
              <p className="font-manrope font-semibold text-sm md:text-base lg:text-lg 2xl:text-xl">
                Study and produce creation to <br className="block 2xl:hidden"/> get a job
              </p>
            </div>
            <div className="flex items-center gap-6 mt-5">
              <img src={Images.check} alt="" />
              <p className="font-manrope font-semibold text-sm md:text-base lg:text-lg 2xl:text-xl">
                Up to date material and created by expert creators
              </p>
            </div>
            <div className="flex items-center gap-6 mt-5">
              <img src={Images.check} alt="" />
              <p className="font-manrope font-semibold text-sm md:text-base lg:text-lg 2xl:text-xl">
                Complete classes and projects and get a certificate from us
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
