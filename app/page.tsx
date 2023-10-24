import Image from "next/image";
import styles from "./page.module.css";
import InfoCard from "./components/InfoCard/InfoCard";
import { VscMail } from "react-icons/vsc";
import ContactInfo from "./fragments/ContactInfo";

const DESCRIPTION =
  "Web and game developer building pages, products, tools and experimenting with games";
export default function Home() {
  return (
    <main className="bg-gray-900 px-4 h-screen">
      <h1
        className="
            text-4xl
            md:text-7xl
            py-7
            md:py-12
            md:pl-20
          "
      >
        Hello!
        <br className="md:hidden" />I am Daniel Casado
      </h1>
      <div
        className="
            flex
            flex-row
            gap-4
            md:gap-8
            align-top
          "
      >
        <Image
          src="/profile-pic.jpeg"
          alt="Headshot picture of Daniel Casado"
          width={800}
          height={800}
          className="
              w-32
              h-44
              md:h-auto
              md:w-[400px]
              aspect-auto
              object-cover
              rounded-3xl
            "
        />
        <div className="flex flex-col gap-8">
          <p className="text-lg md:text-xl whitespace-break-spaces">
            {DESCRIPTION}
          </p>
          <ContactInfo className="hidden md:flex" />
        </div>
      </div>
      <div className="h-8 md:hidden" />
      <ContactInfo className="md:hidden flex" />
    </main>
  );
}
