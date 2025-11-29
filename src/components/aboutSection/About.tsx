import { AboutText } from './components/AboutText';
import { Interests } from './components/Interests';

type Props = {
  className?: string;
  // define your other props here
};

export const About: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`w-full py-16 bg-grey-gradient flex flex-col container-padding ${className ?? ''}`}
    >
      <h2 className="text-2xl font-semibold text-primary-content px-4">
        🫧 About
      </h2>
      <div className="flex flex-col md:flex-row md:gap-x-16">
        <AboutText />
        <Interests />
      </div>
    </div>
  );
};
