import { useEffect, useState } from 'react';
import Logo from '../Assets/Logo.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [message, setMassege] = useState('');
  const [toHome, setToHome] = useState('');
  const [login, setLogin] = useState('Sign In');
  const usernameOnChange = (event) => {
    setName(event.target.value);
  };
  const passwordOnChange = (event) => {
    setPass(event.target.value);
  };
  const Usernames = user.map((el) => el.user.username);
  const handlerClick = () => {
    const found = Usernames.find((el) => el === name);
    if (found === pass) {
      setMassege('login success');
      setToHome('/Home');
      setLogin('Login');
      return;
    } else {
      setMassege('Wrong Username or Password');
    }
  };
  return (
    <div className=" w-[500px] h-[500px] flex flex-col items-center justify-center gap-5 rounded-xl border-[#E8E8EA] border-[1px]">
      <img src={Logo} alt="logo" className="mb-10"></img>
      <input
        type="text"
        placeholder="Username & email"
        onChange={usernameOnChange}
        className="w-fit py-1 px-4 rounded-md border-[#E8E8EA] border-[1px] outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={passwordOnChange}
        className="w-fit py-1 px-4 rounded-md border-[#E8E8EA] border-[1px] outline-none"
      />
      <p>{message}</p>
      <Link
        to={toHome}
        className="px-4 py-2 rounded-xl  w-fit  text-[12px] bg-[#4B6BFB] text-white capitalize"
        onClick={handlerClick}
      >
        {login}
      </Link>
    </div>
  );
};
