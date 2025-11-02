import { LandingImage } from './components/LandingImage';
import { LandingText } from './components/LandingText';

type Props = {
  className?: string;
  // define your other props here
};

export const Landing: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`w-full h-[calc(100vh-64px)] bg-primary flex items-center px-32 ${className ?? ''}`}
    >
      <LandingText />
      <LandingImage />
    </div>
  );
};
