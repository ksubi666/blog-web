import './App.css';
import { Allblogpost, Carousel, Navbar, Trending } from './components';

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
