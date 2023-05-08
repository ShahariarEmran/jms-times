import HeroSection from "../components/HeroSection/HeroSection";
import NewsSectionA from "../components/NewsSection/NewsSectionA";
import NewsSectionB from "../components/NewsSection/NewsSectionB";
import NewsSectionC from "../components/NewsSection/NewsSectionC";
import Ads from "../ui/Ads";

const Home = () => {
  return (
    <>
      <Ads />
      <HeroSection />
      <Ads />
      <NewsSectionA />
      <Ads />
      <NewsSectionB />
      <Ads />
      <NewsSectionC />
      <Ads />
    </>
  );
};

export default Home;
