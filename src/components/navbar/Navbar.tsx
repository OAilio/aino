import { CustomLink } from './components/CustomLink';

//TODO Mobile nav

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute sticky z-10 top-0 w-full h-16 px-[8rem] flex items-center justify-between">
      <CustomLink to={'/'}>AINO JYLHÄ</CustomLink>
      <span className="flex">
        <CustomLink to={'/'}>About</CustomLink>
        <CustomLink to={'/'}>Work Experience</CustomLink>
        <CustomLink to={'/'}>Projects</CustomLink>
      </span>
    </nav>
  );
};
