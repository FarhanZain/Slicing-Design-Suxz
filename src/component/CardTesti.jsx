import Images from "../assets/image/Images";

export default function CardTesti(props) {
  return (
    <>
      <div className="relative w-60 border border-primary rounded-xl">
        <div className=" absolute -translate-y-1/2 translate-x-1/2 right-1/2">
          <img src={props.img} alt="" />
        </div>
        <div className="text-center py-12 mt-7">
          <h2 className="font-manrope font-bold text-xl">{props.nama}</h2>
          <p className="font-manrope font-normal text-sm text-gray-400">
            {props.kerja}
          </p>
          <p className="font-manrope font-normal text-base mt-7">
            {props.kata}
          </p>
        </div>
      </div>
    </>
  );
}
