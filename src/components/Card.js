export const Card = (props) => {
  console.log(props.image);
  return (
    <div
      style={{ backgroundImage: `url('${props.image}')` }}
      className="max-w-[293px] h-[320px] rounded-xl flex flex-col justify-end gap-4 p-8 bg-center bg-cover relative"
    >
      <button className="bg-[#4B6BFB] px-2.5 py-1 text-xs text-white rounded-[6px] w-fit">
        {props.tag}
      </button>
      <h1 className="font-semibold text-lg">{props.title}</h1>
      <div className="max-w-[293px] h-[320px] bg-[#00000040] absolute top-0 left-0"></div>
    </div>
  );
};
