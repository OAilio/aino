type Props = {
  text: string;
  className?: string;
  // define your other props here
};

export const PrimaryButton: React.FC<Props> = ({ className, text }) => {
  return (
    <button
      className={`flex w-fit font-semibold bg-accent hover:bg-accent-hover transition duration-300 md:text-lg lg:text-2xl text-accent-content px-2 py-1 lg:px-4 lg:py-2 cursor-pointer rounded-lg rounded-tl-none lg:rounded-tr-[16px] lg:rounded-br-[16px] lg:rounded-bl-[16px] ${className ?? ''}`}
    >
      {text}
    </button>
  );
};
