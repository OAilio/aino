import { AboutText } from './components/AboutText';

type Props = {
  className?: string;
  // define your other props here
};

export const About: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`w-full py-16 bg-grey-gradient flex flex-col md:flex-row container-padding ${className ?? ''}`}
    >
      <AboutText />
      <AboutText />
    </div>
  );
};
