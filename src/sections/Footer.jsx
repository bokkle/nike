import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="logo" />
          </a>
          <p className="font-montserrat text-white-400 mt-6 text-base leading-7 sm:max-w-sm">
            Get shoes ready for the new season at your nearest Nike store. Find
            your perfect fit in store.
          </p>
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((icon) => (
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
                key={icon.src}
              >
                <img src={icon.src} width={24} height={24} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="font-montserrat mb-6 text-2xl font-medium leading-normal text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="text-white-400 font-montserrat hover:text-slate-gray 
                    mt-3 cursor-pointer text-base leading-normal"
                    key={link.name}
                  >
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="text-white-400 mt-24 flex justify-between max-sm:flex-col 
      max-sm:items-center"
      >
        <div className="font-montserrat flex flex-1 cursor-pointer items-center justify-start gap-2">
          <img
            src={copyrightSign}
            width={20}
            height={20}
            className="m-0 rounded-full"
            alt="copy write sign"
          />
          <p>Copyright &copy; Nike. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
