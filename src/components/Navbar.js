import { Search } from 'lucide-react';
import Logo from '../Assets/Logo.png';
import { Menutext } from '../constants.js';
import { Link } from 'react-router-dom';
const styles = {
  container: 'flex py-8 items-start w-[1130px]',
  navbarContainer: 'flex gap-[118px]',
  menu: 'flex gap-10 w-[667px] justify-center items-center mr-[21px]',
  inputContainer:
    'flex py-2 pr-2 pl-4 bg-[#F4F4F5] rounded-[5px] items-center w-[166px] gap-3',
  input: 'bg-[#F4F4F5] w-[114px] text-sm font-normal leading-5 outline-none',
};
export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <img src={Logo} alt="Logo" className="w-[158px] h-[36px]"></img>
        <div className={styles.menu}>
          {Menutext.map((el) => (
            <Link to={`/${el}`}>
              <p className="hover:font-medium">{el}</p>
            </Link>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <input placeholder="Search" className={styles.input} />
          <Search size={16} />
        </div>
      </div>
    </div>
  );
};
