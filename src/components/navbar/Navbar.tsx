import { CustomLink } from './components/CustomLink';

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 w-full py-4 px-[8rem] flex justify-between">
      <CustomLink to={'/'}>AINO JYLHÄ</CustomLink>
      <span className="flex">
        <CustomLink to={'/'}>About</CustomLink>
        <CustomLink to={'/'}>Work Experience</CustomLink>
        <CustomLink to={'/'}>Projects</CustomLink>
      </span>
    </nav>
  );
};
