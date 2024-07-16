import './App.css';
import { Carousel, Navbar, Trending } from './components';

function App() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Navbar />
      <Carousel />
      <Trending />
    </div>
  );
}

export default App;
