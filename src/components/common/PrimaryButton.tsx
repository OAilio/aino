type Props = {
  text: string;
  className?: string;
  // define your other props here
};

export const PrimaryButton: React.FC<Props> = ({ className, text }) => {
  return (
    <button
      className={`flex w-fit font-semibold bg-accent hover:bg-accent-hover transition duration-300 text-2xl text-accent-content px-4 py-2 cursor-pointer rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] rounded-tl-none ${className ?? ''}`}
    >
      {text}
    </button>
  );
};
