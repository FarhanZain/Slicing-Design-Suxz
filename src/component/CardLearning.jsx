export default function CardLearning(props) {
  return (
    <>
      <div className="p-[30px] w-[250px] bg-white text-black hover:bg-primary hover:text-white rounded-2xl shadow-sm">
        <img src={props.img} alt="" />
        <h2 className="mt-3 text-xl font-manrope font-bold">{props.judul}</h2>
        <p className="mt-2 text-sm font-manrope font-normal">{props.isi}</p>
        <button className="w-full py-2 rounded-lg bg-[#44E4C9] hover:bg-[#35DABE] text-base font-manrope font-bold text-white mt-3">
          See class
        </button>
      </div>
    </>
  );
}
