
import Banner from "../components/Banner";
import NewArrivals from "../components/NewArrivals";
import TopSelling from "../components/TopSelling";
import BrowseByStyle from "../components/BrowseByStyle";
import Customers from "../components/Customers";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
    
      <Banner />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <Customers />
      <Footer />
    </div>
  );
}

export default Home;
