export const LoadMore = () => {
  const style = {
    button:
      'py-3 px-5 items-center rounded-[6px] border-[#696A754D] border-[1px] mb-[80px] cursor-pointer hover:font-medium hover:shadow-md',
  };
  return (
    <div>
      <button className={style.button}>Load More</button>
    </div>
  );
};
