import { Carousel } from '../components/Carousel.js';
import { Trending } from '../components/Trending.js';
import { AllBlogPost } from './AllBlogPost.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
export const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(process.env.BACKEND).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-[100px]">
      <Carousel Content={data} />
      <Trending Content={data} />
      <AllBlogPost postTag={data} Content={data} />
    </div>
  );
};
