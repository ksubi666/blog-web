import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from '../Assets/Image.png';
export const Carousel = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-[11px] relative">
        <img src={Image} alt="Carousel-Photo" className="w-[1216px]"></img>
        <div className="absolute bg-white p-10 rounded-xl bottom-[60px] left-[10px] w-[598px] h-[252px]">
          <button className="bg-[#4B6BFB] px-2.5 py-1 text-xs text-white rounded-[6px] w-fit mb-4">
            Technology
          </button>
          <h1 className="font-semibold text-4xl mb-6">
            Grid system for better Design User Interface
          </h1>
          <p>August 20, 2022</p>
        </div>

        <div className="w-[1216px] flex justify-end gap-[9px]">
          <button className="size-10 border-solid rounded-md border-[1px] border-[#696A75] items-center justify-center flex">
            <ChevronLeft strokeWidth={1} size={30} />
          </button>
          <button className="size-10 border-solid rounded-md border-[1px] border-[#696A75] items-center justify-center flex">
            <ChevronRight strokeWidth={1} size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};
