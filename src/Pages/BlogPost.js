import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const styles = {
  container: 'w-[1216px] flex flex-col justify-center gap-8',
  title: 'text-[36px] font-semibold',
  username: 'text-base font-medium leading-6 text-[#97989F] capitalize',
  date: 'text-[#97989F] text-[14px] font-normal leading-6',
  article: 'flex flex-col gap-5 text-xl leading-8 text-[#3B3C4A]',
};
export const BlogPost = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`${process.env.BACKEND}/${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);
  function createMarkup() {
    return { __html: data.body_html };
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <img
            className="size-[28px] rounded-full"
            src={data?.user?.profile_image}
            alt="ProfileImage"
          ></img>
          <p className={styles.username}>{data?.user?.name}</p>
        </div>
        <p className={styles.date}>{data?.published_at}</p>
      </div>
      <img src={data?.social_image} alt="coverImage" />
      <div
        className={styles.article}
        dangerouslySetInnerHTML={createMarkup()}
      />
    </div>
  );
};
