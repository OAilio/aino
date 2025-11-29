import { ExpDomain } from './components/ExpDomain';
import { PrimaryButton } from '../common/PrimaryButton';
import {
  PiFactory,
  PiFileMagnifyingGlass,
  PiMegaphone,
  PiMicroscope,
} from 'react-icons/pi';

type Props = {
  className?: string;
  // define your other props here
};

const domains: {
  icon: React.ElementType;
  title: string;
  description: string;
}[] = [
  {
    icon: PiFileMagnifyingGlass,
    title: 'Research',
    description:
      'Exploring ideas, gathering insights, and analyzing data to uncover meaningful patterns.',
  },
  {
    icon: PiMicroscope,
    title: 'Lab Work',
    description:
      'Conducting experiments, testing hypotheses, and refining processes through scientific practice.',
  },
  {
    icon: PiFactory,
    title: 'Production',
    description:
      'Transforming concepts into tangible outputs, ensuring efficiency, quality, and scalable delivery.',
  },
  {
    icon: PiMegaphone,
    title: 'Marketing',
    description:
      'Promoting products with creative strategies, building trust, and engaging audiences effectively.',
  },
];

export const WorkExperience: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`relative bg-[url(/placeholder.JPEG)] min-h-[90vh] py-32 md:py-unset container-padding bg-fixed bg-cover bg-center flex flex-col items-center justify-center ${className ?? ''}`}
    >
      <div className="flex flex-col bg-beige-gradient rounded-[32px] rounded-tl-none lg:w-[80%] p-8 gap-4 md:p-8 xl:px-16 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)]">
        <h2 className="text-xl font-semibold text-primary-content text-left">
          🫧 Work Experience
        </h2>
        <p>Perhaps I could be your next superstar in one of these?</p>
        <div
          className="
  flex flex-col gap-16 py-4
  sm:grid sm:grid-cols-2
  lg:flex lg:flex-row
"
        >
          {domains.map((workDomain) => (
            <div key={workDomain.title}>
              <ExpDomain
                icon={workDomain.icon}
                title={workDomain.title}
                description={workDomain.description}
              />
            </div>
          ))}
        </div>
        <span className="w-full flex justify-center">
          <PrimaryButton text="View my CV" />
        </span>
      </div>
    </div>
  );
};
