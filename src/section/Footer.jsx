import Images from "../assets/image/Images";

export default function Footer() {
  return (
    <>
      <footer className="px-[30px] md:px-[64px] lg:px-[114px] py-14">
        <div className="flex flex-wrap gap-12 md:gap-6 lg:gap-0 justify-start lg:justify-between">
          <div>
            <a href="#" className="flex items-center">
              <img src={Images.logo} className="h-8 mr-3" alt="Suxz Logo" />
              <span className="self-center text-3xl font-manrope font-bold whitespace-nowrap">
                Suxz
              </span>
            </a>
            <p className="font-manrope text-base md:text-lg lg:text-xl font-medium text-black mt-10">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit sed
              do eiusmod tempor <br /> incididunt ut labore et dolore.
            </p>
          </div>
          {/* --- */}
          <div>
            <h2 className="font-manrope text-lg md:text-xl lg:text-2xl font-bold text-black">
              Company
            </h2>
            <ul className="font-manrope text-base md:text-lg lg:text-xl font-medium text-black space-y-5 mt-6">
              <li>
                <a className="hover:text-primary" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Blogs
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Portfolios
                </a>
              </li>
            </ul>
          </div>
          {/* --- */}
          <div>
            <h2 className="font-manrope text-lg md:text-xl lg:text-2xl font-bold text-black">
              Links
            </h2>
            <ul className="font-manrope text-base md:text-lg lg:text-xl font-medium text-black  space-y-5 mt-6">
              <li>
                <a className="hover:text-primary" href="#">
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Github
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Supports
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* --- */}
          <div>
            <h2 className="font-manrope text-lg md:text-xl lg:text-2xl font-bold text-black">
              Contact
            </h2>
            {/* phone */}
            <div className="flex items-center mt-6 text-primary hover:text-primaryHover hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] md:w-[25px] lg:w-[30px] h-[20px] md:h-[25px] lg:h-[30px] "
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m20.33 21.48l2.24-2.24a2.19 2.19 0 0 1 2.34-.48l2.73 1.09a2.18 2.18 0 0 1 1.36 2v5A2.17 2.17 0 0 1 26.72 29C7.59 27.81 3.73 11.61 3 5.41A2.17 2.17 0 0 1 5.17 3H10a2.16 2.16 0 0 1 2 1.36l1.09 2.73a2.16 2.16 0 0 1-.47 2.34l-2.24 2.24s1.29 8.73 9.95 9.81Z"
                />
              </svg>
              <p className="font-manrope text-base md:text-lg lg:text-xl font-medium ml-3">
                (021) 31048184
              </p>
            </div>
            {/* email */}
            <div className="flex items-center mt-5 text-primary hover:cursor-pointer hover:text-primaryHover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] md:w-[25px] lg:w-[30px] h-[20px] md:h-[25px] lg:h-[30px]"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"
                />
              </svg>
              <p className="font-manrope text-base md:text-lg lg:text-xl font-medium  ml-3">
                irham@suxz.com
              </p>
            </div>
            {/* alamat */}
            <p className="font-manrope text-base md:text-lg lg:text-xl font-medium text-black mt-5">
              Jl. Narogong. Perum <br /> Cileungsi Elok Blok <br /> A No.5.
              Jakarta <br /> Selatan. 12240.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
