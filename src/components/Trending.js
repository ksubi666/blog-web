import { Card } from './Card';
import Image from '../Assets/Image.png';
const content = [
  {
    img: `${Image}`,
    tag: 'Technology',
    title:
      'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    img: `${Image}`,
    tag: 'Technology',
    title:
      'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    img: `${Image}`,
    tag: 'Technology',
    title:
      'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    img: `${Image}`,
    tag: 'Technology',
    title:
      'The Impact of Technology on the Workplace: How Technology is Changing',
  },
];

export const Trending = () => {
  return (
    <div className="flex flex-col gap-[30px] items-center">
      <div className="flex items-start w-[1231px]">
        <p className="text-2xl font-bold ">Trending</p>
      </div>
      <div className="flex flex-row gap-5 text-[#ffffff]">
        {content.map((el) => (
          <Card image={el.img} tag={el.tag} title={el.title} />
        ))}
      </div>
    </div>
  );
};
