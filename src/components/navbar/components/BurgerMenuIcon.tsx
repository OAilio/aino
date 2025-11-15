type Props = {
  className?: string;
  isMenuOpen: boolean;
  // define your other props here
};

export const BurgerMenuIcon: React.FC<Props> = ({ className, isMenuOpen }) => {
  return (
    <button className={`cursor-pointer p-4 ${className ?? ''}`}>
      <div className="grid justify-items-center gap-1.5">
        <span
          className={`h-1 w-8 rounded-full bg-primary-content transition
            ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}
          `}
        ></span>
        <span
          className={`h-1 w-8 rounded-full bg-primary-content transition
            ${isMenuOpen ? 'scale-x-0' : ''}
          `}
        ></span>
        <span
          className={`h-1 w-8 rounded-full bg-primary-content transition
            ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}
          `}
        ></span>
      </div>
    </button>
  );
};
