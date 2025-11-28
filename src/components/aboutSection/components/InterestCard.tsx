type Props = {
  heading: string;
  content: string;
  className?: string;
  // define your other props here
};

export const InterestCard: React.FC<Props> = ({
  heading,
  content,
  className,
}) => {
  return (
    <div
      className={`flex flex-col bg-secondary p-4 rounded-[16px] rounded-tl-none shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)] ${className ?? ''}`}
    >
      <h4 className="font-medium">{heading}</h4>
      <p>{content}</p>
    </div>
  );
};
