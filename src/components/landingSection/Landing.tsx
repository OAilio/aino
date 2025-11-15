import { LandingImage } from './components/LandingImage';
import { LandingText } from './components/LandingText';

type Props = {
  className?: string;
  // define your other props here
};

export const Landing: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`w-full md:h-[calc(100vh-64px)] bg-primary flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 xl:px-32 ${className ?? ''}`}
    >
      <LandingText />
      <LandingImage />
    </div>
  );
};
