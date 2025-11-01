import { Link, type LinkProps } from 'react-router';

export const CustomLink: React.FC<LinkProps> = ({ to, children, ...rest }) => {
  return (
    <Link
      to={to}
      {...rest}
      className="text-primary-content font-semibold py-2 px-4 bg-transparent hover:bg-gray-200 transition-colors duration-300 ease-in-out rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] rounded-tl-none"
    >
      {children}
    </Link>
  );
};
