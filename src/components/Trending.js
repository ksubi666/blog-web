import { Card } from './Card';
import { AllBlogContent, content } from '../constants.js';

export const Trending = () => {
  return (
    <div className="flex flex-col gap-[30px] items-center">
      <div className="flex items-start w-[1231px]">
        <p className="text-2xl font-bold ">Trending</p>
      </div>
      <div className="flex flex-row gap-5 text-[#ffffff]">
        {content.map((el, index) => (
          <Card
            image={AllBlogContent[index].img}
            tag={AllBlogContent[index].tag}
            title={AllBlogContent[index].title}
          />
        ))}
      </div>
    </div>
  );
};
