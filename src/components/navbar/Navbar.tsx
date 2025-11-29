import { useEffect, useState } from 'react';
import { CustomLink } from './components/CustomLink';
import { OverlayMenu } from './components/OverlayMenu';
import { BurgerMenuIcon } from './components/BurgerMenuIcon';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasBgColor, setHasBgColor] = useState(false);

  useEffect(() => {
    const changeBgColor = () => {
      setHasBgColor(window.scrollY >= 32);
    };
    window.addEventListener('scroll', changeBgColor);
    changeBgColor();
    return () => {
      window.removeEventListener('scroll', changeBgColor);
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky z-10 top-0 w-full h-16 container-padding bg-primary flex items-center justify-between transition-colors duration-100 ease-out border-b  ${
          hasBgColor
            ? 'border-accent shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)]'
            : 'border-transparent'
        }`}
      >
        <CustomLink to={'/'}>AINO JYLHÄ</CustomLink>
        <span className="flex hidden md:flex">
          <CustomLink to={'/'}>About</CustomLink>
          <CustomLink to={'/'}>Work Experience</CustomLink>
          <CustomLink to={'/'}>Projects</CustomLink>
        </span>
        <span
          className="flex md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BurgerMenuIcon isMenuOpen={isMenuOpen} />
        </span>
      </nav>
      <OverlayMenu
        className={`flex md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
};
