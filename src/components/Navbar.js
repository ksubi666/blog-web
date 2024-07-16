import { Search } from 'lucide-react';
import Logo from '../Assets/Logo.png';
import { Menutext } from '../constants.js';

export const Navbar = () => {
  return (
    <div className="flex justify-around py-8 px-[350px] gap-[21px] items-center">
      <img src={Logo} alt="Logo"></img>
      <div className="flex gap-10">
        {Menutext.map((el) => (
          <p>{el}</p>
        ))}
      </div>
      <div className="flex">
        <input placeholder="Search" />
        <Search />
      </div>
    </div>
  );
};
