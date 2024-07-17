import { Search } from 'lucide-react';
import Logo from '../Assets/Logo.png';
import { Menutext } from '../constants.js';

export const Navbar = () => {
  return (
    <div className="flex justify-center text-[#3B3C4A]">
      <div className="flex justify-between py-8 w-[1217px] gap-[21px] items-center">
        <img src={Logo} alt="Logo"></img>
        <div className="flex gap-10">
          {Menutext.map((el) => (
            <p>{el}</p>
          ))}
        </div>
        <div className="flex py-2 pr-2 pl-4 bg-[#F4F4F5] rounded-[5px] items-center justify-center">
          <input placeholder="Search" className="bg-[#F4F4F5] w-[114px]" />
          <Search size={16} />
        </div>
      </div>
    </div>
  );
};
