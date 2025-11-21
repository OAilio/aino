import { CustomLink } from './CustomLink';

type Props = {
  className?: string;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OverlayMenu: React.FC<Props> = ({
  className,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <>
      <div
        className={`
        fixed z-20 bg-primary flex flex-col pt-16 gap-y-4
        w-[50%] h-[calc(100vh-64px)] top-16 right-0
        transform transition-transform duration-300 ease-in-out
        ${className ?? ''}
      `}
      >
        <CustomLink to={'/'}>About</CustomLink>
        <CustomLink to={'/'}>Work Experience</CustomLink>
        <CustomLink to={'/'}>Projects</CustomLink>
      </div>
      <div
        className={`
          h-full w-full bg-black/30 fixed z-15
          transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMenuOpen(false)}
      >
        {''}
      </div>
    </>
  );
};
