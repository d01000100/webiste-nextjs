import Image from "next/image";
import ContactInfo from "./fragments/ContactInfo";
import Projects from "./fragments/Projects/Projects";
import { BULLETS, INTRO } from "./data/Info";

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
        <Projects />
        <div className="h-8" />
        <h2 className="text-5xl">Experience</h2>
        <div className="h-8" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          rhoncus, nisi quis tempor aliquet, enim sem mollis nulla, et pretium
          lorem erat nec arcu. Suspendisse id accumsan nisi. Suspendisse
          fermentum ipsum tristique sapien aliquet, vel vehicula libero rhoncus.
          Proin bibendum velit quis risus sollicitudin pharetra. Maecenas
          scelerisque eget nulla sed tempor. Phasellus ultrices, enim at
          elementum ullamcorper, justo neque laoreet tellus, suscipit hendrerit
          nisi quam in velit. Nam elementum vel metus vitae malesuada. Ut
          efficitur imperdiet metus, a dignissim quam pulvinar sed. Aliquam arcu
          dolor, malesuada non velit vitae, porta ultrices diam. Aenean sit amet
          maximus ante. Phasellus ac porta massa. Donec semper nunc dignissim
          enim tempor mollis eu ut augue. Aenean id condimentum nisl, sit amet
          posuere purus. Mauris ullamcorper bibendum nisl eget luctus. Aliquam
          ac purus vel nisl laoreet pulvinar. Maecenas id magna pulvinar,
          ullamcorper est nec, venenatis sem. Ut et eros ut nulla pulvinar
          euismod. Fusce suscipit ex magna. Nulla eget porttitor lectus. Vivamus
          et lectus vel arcu imperdiet convallis et non nulla. Suspendisse
          fermentum congue scelerisque. Curabitur tincidunt lacus a dui
          convallis, vitae hendrerit lacus suscipit.
        </p>
      </div>
    </main>
  );
}
