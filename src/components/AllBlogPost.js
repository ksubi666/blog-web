import { AllBlogContent, AllBlogPostTag } from '../constants.js';
import { AllBlogCard } from './AllBlogCard';
import { LoadMore } from './LoadMore.js';
const styles = {
  conatiner: 'flex flex-col items-center gap-8',
  textContainer:
    'flex flex-col w-[1216px] gap-8 text-[#495057] font-bold self-strech',
  header: 'font-bold text-2xl leading-7 text-[#181A2A]',
  tag: 'text-[#495057] text-xs font-bold leading-6',
  postContainer: 'flex flex-wrap w-[1216px] gap-5',
};

export const Allblogpost = ({ postTag }) => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}>All Blog Post</h1>
        {postTag ? (
          <div className="flex gap-5 [&>*:first-child]:text-[#D4A373]">
            {postTag.map((el) => (
              <p className={styles.tag}>{el}</p>
            ))}
            <p className={`w-[100%]  text-right ${styles.tag}`}>View All</p>
          </div>
        ) : null}
      </div>
      <div className={styles.postContainer}>
        {AllBlogContent.map((el) => (
          <AllBlogCard
            autorImg={
              'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
            }
            autorName={'aksjdakjs ask'}
            img={el.img}
            tag={el.tag}
            title={el.title}
            date={el.date}
          />
        ))}
      </div>
      <LoadMore />
    </div>
  );
};
