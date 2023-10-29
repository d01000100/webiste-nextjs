import Image from "next/image";
import ContactInfo from "./fragments/ContactInfo";
import ProjectSection from "./fragments/Projects/Projects";
import { BULLETS, INTRO } from "./data/Info";
import { PROJECTS, PUBLICATIONS } from "./data/Projects";
import TimelineEntry from "./components/Timeline/TimelineEntry";
import { EXPERIENCE } from "./data/Experience";
import Footer from "./fragments/Footer/Footer";

export default function Home() {
  return (
    <main className="px-4 md:px-20 max-w-[1440px] m-auto">
      <h1
        className="
            text-4xl
            md:text-7xl
            py-7
            md:py-12
          "
      >
        Hello!&nbsp;
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
          <div className="whitespace-break-spaces">
            <p className="text-lg md:text-xl mb-2">{INTRO}</p>
            <ul className="text-md md:text-lg">
              {BULLETS.map((bullet, idx) => (
                <li key={`intro-bullet-${idx}`} className="list-item">
                  &bull; {bullet}
                </li>
              ))}
            </ul>
          </div>
          <ContactInfo className="hidden md:flex" />
        </div>
      </div>
      <div>
        <div className="h-16" />
        <ContactInfo className="md:hidden flex mb-8" />
        <ProjectSection projects={PROJECTS} title="Projects" />
        <div className="h-8" />
        <ProjectSection projects={PUBLICATIONS} title="Publications" />
        <div className="h-8" />
        <h2 className="md:text-5xl text-3xl">Experience</h2>
        <div className="h-8" />
        <div>
          {EXPERIENCE.map((entry, idx) => (
            <TimelineEntry key={`experience-${idx}`} {...entry} />
          ))}
        </div>
      </div>
      <div className="h-8"></div>
      <Footer />
    </main>
  );
}
