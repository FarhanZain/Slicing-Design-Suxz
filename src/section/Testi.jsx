import Images from "../assets/image/Images";
import CardTesti from "../component/CardTesti";

export default function Testi() {
  return (
    <>
      <section className="py-14 px-[30px] md:px-[64px] lg:px-[114px]">
        <div className="text-center">
          <p className="text-base md:text-lg lg:text-xl text-primary font-manrope font-bold">
            TESTIMONIAL
          </p>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-manrope font-extrabold mt-4">
            Our Alumni Say
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-manrope font-medium mt-5">
            These are the words of people who have taken our class
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-16 md:gap-11 lg:gap-0 lg:justify-between mt-20">
          <CardTesti
            img={Images.alumni1}
            nama="Jason Todd"
            kerja="Enterpreneur"
            kata="“The mentor is cool, how
            to convey each material
            is also detailed and easy
            to understand..”"
          />
          <CardTesti
            img={Images.alumni2}
            nama="Cassandra K"
            kerja="Web Developer"
            kata="“The mentor is cool, how
            to convey each material
            is also detailed and easy
            to understand..”"
          />
          <CardTesti
            img={Images.alumni3}
            nama="Peter Parker"
            kerja="PHP Enthusiast"
            kata="“The mentor is cool, how
            to convey each material
            is also detailed and easy
            to understand..”"
          />
          <CardTesti
            img={Images.alumni4}
            nama="Jean Gray"
            kerja="Designer"
            kata="“The mentor is cool, how
            to convey each material
            is also detailed and easy
            to understand..”"
          />
        </div>
      </section>
    </>
  );
}
