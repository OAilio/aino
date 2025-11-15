import { useState } from 'react';
import { CustomLink } from './components/CustomLink';
import { OverlayMenu } from './components/OverlayMenu';
import { BurgerMenuIcon } from './components/BurgerMenuIcon';

//TODO Mobile nav

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="absolute bg-primary sticky z-10 top-0 w-full h-16 px-4 md:px-8 lg:px-16 xl:px-32 flex items-center justify-between">
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
