import { LandingImage } from './components/LandingImage';
import { LandingText } from './components/LandingText';
import { MarqueeScroll } from './components/MarqueeScroll';

type Props = {
  className?: string;
  // define your other props here
};

export const Landing: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`w-full pb-20 min-h-[calc(100vh-64px)] bg-landing-gradient flex flex-col md:flex-row items-center container-padding relative overflow-hidden ${className ?? ''}`}
    >
      <LandingText />
      <LandingImage />
      <MarqueeScroll />
    </div>
  );
};
