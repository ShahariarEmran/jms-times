import HeroSection from "../components/HeroSection/HeroSection";
import NewsSection from "../components/NewsSection/NewsSection";
import Ads from "../ui/Ads";

const Home = () => {
  return (
    <>
      <Ads />
      <HeroSection />
      <Ads />
      <NewsSection />
      <Ads />
      {/* <HeroSection />
      <Ads />
      <HeroSection />
      <Ads /> */}
    </>
  );
};

export default Home;
