import { AllBlogContent, AllBlogPostTag } from '../constants.js';
import { AllBlogCard } from './AllBlogCard';

export const Allblogpost = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col w-[1216px] gap-8 text-[#495057] font-bold">
        <h1>All Blog Post</h1>
        <div className="flex gap-5">
          {AllBlogPostTag.map((el) => (
            <p>{el}</p>
          ))}
          <p className="w-[100%]  text-right ">View All</p>
        </div>
      </div>
      <div className="flex flex-wrap w-[1216px] gap-5">
        {AllBlogContent.map((el) => (
          <AllBlogCard
            img={el.img}
            tag={el.tag}
            title={el.title}
            date={el.date}
          />
        ))}
      </div>
    </div>
  );
};
