import { Slide } from "./Slide";

export const Swiper = () => {
  return (
    <div className="tw-bg-brandingGreen-400">
      <div className="swiper tw-max-w-[1920px]">
        <div className="swiper-wrapper">
          <Slide deskTopImg="/feb-banner.jpg" deskTopAlt="hero1">
            <h2>Slide 1</h2>
          </Slide>
          {/* <Slide deskTopImg="/images/hero1.jpg" deskTopAlt="hero1">
            <h2>Slide 2</h2>
          </Slide> */}
        </div>
      </div>
    </div>
  );
};
