import './App.css';
import Header from './Common/Header';
import SubHeader from './Common/SubHeader';
import Categories from './Components/Dashboard/Cetegory';
import Offers from './Components/Dashboard/Offer';
import Slider from './Components/Dashboard/Slider';
import ShopCategories from './Components/Dashboard/SubSection';
import NewProducts from './Components/Dashboard/NewProduct';
import CurrentTopSeller from './Components/Dashboard/CurrentTopSeller';
import TopBrands from './Components/Dashboard/TopBrands';
import SubOffers from './Components/Dashboard/SubOffers';

function App() {
  return (
    <div className="App">
      
      <Header />
      <SubHeader />
      <Offers />
      <Categories />
      <Slider />
      <ShopCategories />
      <NewProducts />
      <CurrentTopSeller />
      <TopBrands />
      <SubOffers />
    </div>
  );
}

export default App;
