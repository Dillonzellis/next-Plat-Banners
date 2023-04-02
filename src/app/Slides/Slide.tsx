import { ImgsContent } from "./ImgsContent";
import { SlideContent } from "./SlideContent";

export const Slide = ({
  children,
  deskTopImg,
  deskTopAlt,
  mobileImg,
  mobileAlt,
}: {
  children?: React.ReactNode;
  deskTopImg: string;
  deskTopAlt: string;
  mobileImg?: string;
  mobileAlt?: string;
}) => {
  return (
    <div className="swiper-slide min-h-350 text-shadow tw-bg-brandingGreen-400">
      <div className="tw-container tw-mx-auto">
        <SlideContent>{children}</SlideContent>
        <ImgsContent deskTopImg={deskTopImg} deskTopAlt={deskTopAlt} />
      </div>
    </div>
  );
};
