import CardLearning from "../component/CardLearning";
import Images from "../assets/image/Images";

export default function Learning() {
  return (
    <>
      <section className="bg-[#F8F8FF] py-14 2xl:py-24 px-[30px] md:px-[64px] lg:px-[114px] 2xl:px-[256px]">
        <div>
          <p className="font-bold text-base md:text-lg lg:text-xl 2xl:text-2xl text-primary font-manrope">
            LEARNINGS
          </p>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-black font-manrope mt-1">
            Online Learning Platform <br /> International Curriculum
          </h1>
          <p className="font-medium text-base md:text-lg lg:text-xl 2xl:text-2xl text-black font-manrope mt-4">
            Study and understand the material <br className="block 2xl:hidden"/> class is more relaxed
            without time limit.
          </p>
        </div>
        <div className="flex flex-col gap-5 justify-center 2xl:gap-10 lg:flex-row lg:justify-between mt-12">
          <CardLearning
            img={Images.card1}
            judul="Starter"
            isi="Free class access for that
            start learning code and
            design"
          />
          <CardLearning
            img={Images.card2}
            judul="Premium"
            isi="Advanced material from
            the Starter &
            learn to
            build projects"
          />
          <CardLearning
            img={Images.card3}
            judul="Superstar"
            isi="Materials for experts
            who have completed the
            premium package"
          />
          <CardLearning
            img={Images.card4}
            judul="Bootcamp"
            isi="Informatics science
            training program with
            the latest material"
          />
        </div>
      </section>
    </>
  );
}
