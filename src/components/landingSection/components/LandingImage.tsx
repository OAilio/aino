type Props = {
  className?: string;
  // define your other props here
};

export const LandingImage: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`min-w-[256px] mb-8 md:pb-unset w-full flex md:flex-1 justify-center items-center ${className ?? ''}`}
    >
      <div className="relative flex">
        <span className="bg-primary z-3 w-full md:w-[256px] lg:w-[456px] flex items-center justify-center rounded-xl shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)]">
          <img
            src="./AinoImg3.png"
            alt="Picture of Aino"
            className="md:h-[256px] lg:h-[456px]"
          />
        </span>
        <svg
          className="
            absolute top-8
            md:w-[256px] md:h-[256px] md:-right-8
            lg:w-[456px] lg:h-[456px] lg:-right-12 lg:top-12
            rotate-[-4deg]
            bg-beige-gradient
            rounded-xl
          "
          viewBox="0 0 528 528"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="100%" height="100%" rx="24" />
        </svg>
      </div>
    </div>
  );
};
