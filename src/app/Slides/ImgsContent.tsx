/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

export const ImgsContent = ({
  deskTopImg,
  deskTopAlt,
  mobileImg,
  mobileAlt,
}: {
  deskTopImg: string;
  deskTopAlt: string;
  mobileImg?: string;
  mobileAlt?: string;
}) => {
  return (
    <>
      <div className="overlay tw-absolute tw-z-10 tw-h-full tw-w-full tw-bg-black/75 md:tw-hidden"></div>
      <img
        width={1920}
        height={350}
        src={deskTopImg}
        className="tw-hidden md:tw-block"
        alt={deskTopAlt}
      />
      <div className="tw-absolute tw-flex tw-h-full tw-items-center">
        <img
          src={mobileImg}
          className="tw-h-full tw-object-cover md:tw-hidden"
          alt={mobileAlt}
        />
      </div>
    </>
  );
};
