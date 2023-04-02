import { Button } from "./Button";

export const SlideContent = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="content tw-absolute tw-top-1/2 tw-z-50 tw-flex tw-w-full tw-max-w-[50rem] tw--translate-y-1/2 tw-flex-col tw-gap-2 tw-px-2 tw-text-center tw-text-white md:tw-top-1/2 md:tw--translate-y-1/2 md:tw-gap-y-4 md:tw-px-8 md:tw-text-left">
      {children}
    </div>
  );
};
