export const Card = (props) => {
  console.log(props.image);
  return (
    <div
      style={{ backgroundImage: `url('${props.image}')` }}
      className="max-w-[293px] h-[320px] rounded-xl flex flex-col justify-end gap-4 p-8 bg-center bg-cover"
    >
      <button className="bg-[#4B6BFB] px-2.5 py-1 text-xs text-white rounded-[6px] w-fit">
        {props.tag}
      </button>
      <h1>{props.title}</h1>
    </div>
  );
};
