import Footer from "../../components/shared/Footer";
import Navber from "../../components/shared/Navber";
import Hero from "../../components/ui/Home/Hero";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navber />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
