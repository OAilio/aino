import type React from 'react';

type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
  // define your other props here
};

export const ExpDomain: React.FC<Props> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 rounded-[16px] rounded-tl-none  ${className ?? ''}`}
    >
      <span className="self-center lg:self-start">
        <Icon size={96} color="var(--color-accent)" />
      </span>
      <h4 className="self-center lg:self-start font-medium text-xl">{title}</h4>
      <p>{description}</p>
    </div>
  );
};
