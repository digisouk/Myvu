import './homepage.css';
import DenseAppBar from './Nav';
import SimpleBox from './Box'
import MostviewBox from './Mostview'
import ToprateBox from './Toprated'
import Carousel from './Carousel'
function Home() {
  return (
    <div className="App">
      <DenseAppBar/>
      <SimpleBox/>
      <Carousel/>
      <MostviewBox/>
      <ToprateBox/>
    </div>
  );
}

export default Home;
