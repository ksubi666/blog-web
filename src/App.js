import './App.css';
import {
  Allblogpost,
  Carousel,
  Contact,
  Error,
  Footer,
  Navbar,
  Trending,
} from './components';
const styles = { container: 'flex flex-col items-center gap-[100px]' };

function App() {
  return (
    <div className={styles.container}>
      {/* <Navbar />
      <Carousel />
      <Trending />
      <Allblogpost />
      <div className="relative w-full mt-[480px]">
        <Footer />
      </div> */}
      <Contact />
      {/* <Error /> */}
    </div>
  );
}

export default App;
