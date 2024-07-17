export const AllBlogCard = (props) => {
  return (
    <div className="w-[392px] flex p-4 flex-col justify-between items-center gap-4 border-[1px] border-[#E8E8EA] rounded-xl ">
      <img
        src={`${props.img}`}
        alt={`${props.img}`}
        className="w-[360px] h-[240px] object-cover object-center rounded-md"
      ></img>
      <div className="p-2 flex flex-col gap-4">
        <button className="bg-[#4B6BFB0D] rounded-md py-1 px-[10px] w-fit text-[#4B6BFB] font-medium">
          {props.tag}
        </button>
        <h1 className="text-[#181A2A] font-semibold text-2xl ">
          {props.title}
        </h1>
        <p className="text-[#97989F]">{props.date}</p>
      </div>
    </div>
  );
};
