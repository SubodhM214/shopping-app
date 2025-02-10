import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-8">
      &copy; {new Date().getFullYear()} Shopping App.
      <a
        href="https://github.com/SubodhM214"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-400 hover:underline"
      >
        <FaGithub className="inline-block text-xl mr-1" />
        SubodhM214
      </a>
    </footer>
  );
};

export default Footer;
