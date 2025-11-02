import { PrimaryButton } from '../../common/PrimaryButton';

type Props = {
  className?: string;
  // define your other props here
};

export const LandingText: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex flex-col text-2xl flex-1 gap-4 p-4 ${className ?? ''}`}
    >
      <p>👋 Hello, I am</p>
      <h1 className="flex text-[5rem] text-accent font-bold ">AINO JYLHÄ</h1>
      <p>
        placeholder passionate about biotechnology, driven by curiosity,
        exploring molecular innovations, solving global challenges through
        science, research, and collaboration. 🔬🌻☕️
      </p>
      <PrimaryButton text="Contact" />
    </div>
  );
};
