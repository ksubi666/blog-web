import './App.css';
import { Allblogpost, Carousel, Navbar, Trending } from './components';
import Image from './Assets/Image.png';

function App() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Navbar />
      <Carousel />
      <Trending />
      <Allblogpost />
    </div>
  );
}

export default App;
