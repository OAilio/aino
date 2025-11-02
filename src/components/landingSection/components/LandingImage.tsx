type Props = {
  className?: string;
  // define your other props here
};

export const LandingImage: React.FC<Props> = ({ className }) => {
  return (
    <div className={`flex flex-1 justify-center ${className ?? ''}`}>
      <div className="relative flex ">
        <span className="bg-primary z-3 w-[528px] flex items-center justify-center rounded-xl shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)]">
          <img
            src="./AinoCropNoLine.png"
            alt="Picture of Aino"
            className="object-cover h-[528px]"
          />
        </span>
        <svg
          className="absolute w-[528px] h-[528px] -right-16 top-16 rotate-[-4deg]"
          viewBox="0 0 528 528"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="528" height="528" fill="#FDBA74" rx="24" />
        </svg>
      </div>
    </div>
  );
};
