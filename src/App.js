import './App.css';
import Header from './Common/Header';
import SubHeader from './Common/SubHeader';
import Categories from './Components/Dashboard/Cetegory';
import Offers from './Components/Dashboard/Offer';
import Slider from './Components/Dashboard/Slider';
import ShopCategories from './Components/Dashboard/SubSection';


function App() {
  return (
    <div className="App">
      
      <Header />
      <SubHeader />
      <Offers />
      <Categories />
      <Slider />
      <ShopCategories />
      
    </div>
  );
}

export default App;
