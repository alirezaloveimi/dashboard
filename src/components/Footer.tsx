import { footerItems } from "../data/datas";

const Footer = () => {
  return (
    <footer className="my-5 md:mt-10">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <p>Created With💖 by Alireza Delf </p>
        <ul className="flex-align-center space-x-1 sm:space-x-3 mt-5 md:mt-0">
          {footerItems.map((item) => (
            <li className="px-4" key={item.id}>
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
