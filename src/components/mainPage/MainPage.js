import React, { Suspense, useEffect } from "react";
import Masthead from "../../style/Masthead.style";
import Slider from "../slider/Slider";
import MainPageIcons from "./MainPageIcons";
import RandomChili from "./RandomChili";
const LazyLastThreeChilies = React.lazy(() => import("./LastThreeChilies"));
import Aos from "aos";
import AnimatedPage from "../common/AnimatedPage";

const MainPage = () => {
  //gives global animation to everything

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <AnimatedPage>
      <Masthead />
      <Suspense>
        <LazyLastThreeChilies />
      </Suspense>
      <MainPageIcons />
      <RandomChili />
      <Slider />
    </AnimatedPage>
  );
};

export default MainPage;
