import HeroSection from "../components/HeroSection/HeroSection";
import NewsSectionA from "../components/NewsSection/NewsSectionA";
import NewsSectionB from "../components/NewsSection/NewsSectionB";
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
    </>
  );
};

export default Home;
