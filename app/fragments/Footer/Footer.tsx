import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex w-full flex-row justify-end">
      <div className="w-fit rounded-t-md border-x border-t border-slate-400 bg-slate-600">
        <Link
          href="https://github.com/d01000100/webiste-nextjs"
          className="flex flex-row items-center gap-2 px-2 py-1 text-lg underline"
        >
          <FaGithub className="inline-block md:h-6 md:w-6" /> Code for this page
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
