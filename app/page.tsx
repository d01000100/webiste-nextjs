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
    <main className="m-auto max-w-[1440px] px-4 md:px-20">
      <h1 className="py-7 text-4xl md:py-12 md:text-7xl">
        Hello!&nbsp;
        <br className="md:hidden" />I am Daniel Casado
      </h1>
      <div className="flex flex-row gap-4 align-top md:gap-8">
        <Image
          src="/profile-pic.jpeg"
          alt="Headshot picture of Daniel Casado"
          width={800}
          height={800}
          className="aspect-auto h-44 w-32 rounded-3xl object-cover md:h-auto md:w-[400px]"
        />
        <div className="flex flex-col gap-8">
          <div className="whitespace-break-spaces">
            <p className="mb-2 text-lg md:text-xl">{INTRO}</p>
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
        <ContactInfo className="mb-8 flex md:hidden" />
        <ProjectSection projects={PROJECTS} title="Projects" />
        <div className="h-8" />
        <ProjectSection projects={PUBLICATIONS} title="Publications" />
        <div className="h-8" />
        <h2 className="text-3xl md:text-5xl">Experience</h2>
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
