import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="Logo" />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-slate-gray text-lg leading-normal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            width={25}
            height={25}
            className="lg:hidden"
            alt="hamburger"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
