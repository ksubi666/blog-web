import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AllBlogContent } from '../constants.js';
import { useState } from 'react';

export const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const leftClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };
  const rightClick = () => {
    if (current < AllBlogContent.length - 1) {
      setCurrent(current + 1);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-[11px] relative">
        <img
          src={AllBlogContent[current].img}
          alt={current}
          className="w-[1216px] h-[600px] rounded-xl object-cover object-center"
        ></img>
        <div className="absolute bg-white p-10 rounded-xl bottom-[60px] left-[10px] w-[598px] flex flex-col items-start">
          <button className="bg-[#4B6BFB] px-2.5 py-1 text-sm text-white rounded-[6px] w-fit mb-4 font-medium">
            {AllBlogContent[current].tag}
          </button>
          <h1 className="font-semibold text-4xl mb-6">
            {AllBlogContent[current].title}
          </h1>
          <p>{AllBlogContent[current].date}</p>
        </div>

        <div className="w-[1216px] flex justify-end gap-[9px]">
          <button className="size-10 border-solid rounded-md border-[1px] border-[#696A75] items-center justify-center flex">
            <ChevronLeft strokeWidth={1} size={30} onClick={leftClick} />
          </button>
          <button className="size-10 border-solid rounded-md border-[1px] border-[#696A75] items-center justify-center flex">
            <ChevronRight strokeWidth={1} size={30} onClick={rightClick} />
          </button>
        </div>
      </div>
    </div>
  );
};
