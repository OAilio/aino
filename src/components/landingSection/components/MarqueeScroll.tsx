import Marquee from 'react-fast-marquee';

type Props = {
  className?: string;
};

const domains = ['LAB WORK', 'MARKETING', 'HOSTING'];

export const MarqueeScroll: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`absolute left-0 bottom-8 pl-4 z-2 bg-beige-gradient w-[110%] rotate-[9deg] -translate-x-6 ${className ?? ''}`}
    >
      <Marquee autoFill>
        {domains.map((domain) => (
          <span
            key={domain}
            className="flex items-center font-medium text-tertiary-content"
          >
            <p className="text-sm lg:text-xl xl:text-2xl">{domain}</p>
            <span className="mx-2 w-1 h-1 lg:w-2 lg:h-2 rounded-full bg-tertiary-content inline-block" />
          </span>
        ))}
      </Marquee>
    </div>
  );
};
