import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="
        w-full
        flex
        flex-row
        justify-end
      "
    >
      <div
        className="
        w-fit
        bg-slate-600
        border-t
        border-x
        rounded-t-md
        border-slate-400
        "
      >
        <a
          href="https://github.com/d01000100/webiste-nextjs"
          className="
            text-lg
            underline
            flex
            flex-row
            items-center
            gap-2
            px-2
            py-1
          "
        >
          <FaGithub className="inline-block md:w-6 md:h-6" /> Code for this page
        </a>
      </div>
    </footer>
  );
};

export default Footer;
