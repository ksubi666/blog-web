import { Search } from 'lucide-react';
import Logo from '../Assets/Logo.png';
import { AllBlogPostTag, Menutext } from '../constants.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const styles = {
  container: 'flex py-8 items-start max-w-[1130px]',
  navbarContainer: 'flex gap-[118px]',
  menu: 'flex gap-10 w-[667px] justify-center items-center mr-[21px]',
  inputContainer:
    'flex flex-col py-2 pr-2 pl-4 bg-[#F4F4F5] rounded-[5px] items-center w-[166px] gap-3  relative',
  input: 'bg-[#F4F4F5] w-[114px] text-sm font-normal leading-5 outline-none',
};

export const Navbar = () => {
  const [text, setText] = useState('');
  const [isShow, setIsShow] = useState(false);
  const handlerClick = () => {
    setIsShow(!isShow);
  };
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const x = AllBlogPostTag.filter((el, i) =>
    el.toLowerCase().includes(text.toLowerCase())
  );
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <Link to="/Home">
          <img src={Logo} alt="Logo"></img>
        </Link>
        <div className={styles.menu}>
          {Menutext.map((el) => (
            <Link to={`/${el}`}>
              <p className="hover:font-medium">{el}</p>
            </Link>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <div className="flex items-center">
            <input
              placeholder="Search"
              className={styles.input}
              onChange={onChangeHandler}
            />
            <Search
              size={16}
              onClick={handlerClick}
              className="cursor-pointer"
            />
          </div>
          {isShow ? (
            <div className="absolute top-[40px] left-0 z-10 bg-[#F4F4F5] w-[154px] pr-2 pl-4 rounded-[5px] flex flex-col gap-2 py-2">
              {x.map((el, i) => (
                <div key={i} ondrop={onChangeHandler}>
                  {el}
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
