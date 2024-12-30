import { Link } from "react-router-dom";
import { footerLinks } from "../constants";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-[500px] bg-gradient-to-t from-primary-700 to-primary-600 w-full flex items-end font-workSans">
      {/* Footer content */}
      <div className="container px-3 mx-auto flex flex-col lg:flex-row gap-5 justify-between items-center h-[120px] pb-40 lg:pb-0 mb-4">
        <Link to="/" className="flex items-center gap-2">
          <img className="size-12 lg:size-auto" src="/logo.png" alt="Avatar" />
          <p className="text-2xl lg:text-[32px] font-semibold text-transparent bg-gradient-to-r from-primary-600 to-primary-300 bg-clip-text">
            Kahafil Ora.
          </p>
        </Link>

        {/* Nav Links */}
        <div className="flex gap-4 text-white md:gap-12">
          {footerLinks.map((link) => (
            <a key={link.id} href={link.link} className="text-white">
              {link.name}
            </a>
          ))}
        </div>

        {/* Nav Button */}
        <p className="text-white">Copyright @ {currentYear} Kahafil Ora.</p>
      </div>
    </footer>
  );
}

export default Footer;
