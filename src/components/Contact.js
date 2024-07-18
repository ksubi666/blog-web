import { contactData } from '../constants.js';
import { ContactCard } from './ContactCard';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
const styles = {
  container: 'flex flex-col items-center gap-[100px]',
  text: 'text-[#696A75] font-base font-normal leading-6',
};
export const Contact = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className="flex flex-col ">
        <div
          className="flex flex-col w-[769px] h-[389px] items-center py-[10px] pt-[14px]
        gap-5 flex-shrink-0"
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold leading-10 ">Contact Us</h2>
            <p className={`w-[624px] h-[103px] ${styles.text}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex py-[10px] items-center gap-[50px]">
            {contactData.map((el) => (
              <ContactCard title={el.title} desc={el.desc} />
            ))}
          </div>
        </div>
        <div className="flex pt-[29px] pr-[130px] pb-[26px] pl-[35px]">
          <div>
            <h2>Leave a Message</h2>
          </div>
          <div>
            <div>
              <input placeholder="Your Name" />
              <input placeholder="Your Email" />
            </div>
            <input placeholder="Subject" />
            <input placeholder="Write a message" />
            <button>Send</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
