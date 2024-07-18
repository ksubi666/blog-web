import { Tag } from './Tag';
const styles = {
  container:
    'w-[392px] flex p-4 flex-col justify-between items-center gap-4 border-[1px] border-[#E8E8EA] rounded-xl ',
  img: 'w-[360px] h-[240px] object-cover object-center rounded-md',
  content: 'p-2 flex flex-col gap-4 self-stretch items-start',
  contentText: 'flex flex-col items-start gap-4 self-stretch',
  title: 'text-[#181A2A] font-semibold text-2xl leading-7',
  date: 'text-[#97989F] text-base font-normal leading-6',
};

export const AllBlogCard = ({ img, tag, title, date, autorImg, autorName }) => {
  return (
    <div className={styles.container}>
      <img src={`${img}`} alt={`${img}`} className={styles.img}></img>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <Tag tag={tag} isPrimary={false} />
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className="flex items-center gap-5">
          <div className="items-center gap-3">
            {autorImg ? (
              <img
                src={autorImg}
                alt="AutorImg"
                className="size-9 rounded-full"
              ></img>
            ) : null}
            <p className="text-base font-medium leading-6 text-[#97989F]">
              {autorName}
            </p>
          </div>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};
