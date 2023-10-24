import { VscMail } from "react-icons/vsc";
import InfoCard from "../components/InfoCard/InfoCard";
import classnames from "classnames";
import { HTMLAttributes } from "react";

interface ContactInfoProps extends HTMLAttributes<HTMLDivElement> {}

const ContactInfo: React.FunctionComponent<ContactInfoProps> = ({
  className,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className={classnames(
        `
          flex
          flex-row
          flex-wrap
          gap-4
          justify-center
          md:justify-start
          items-stretch
        `,
        className
      )}
    >
      <InfoCard
        icon={VscMail}
        fieldName="Email"
        value="jdanielca@gmail.com"
        href="mailto:jdanielca@gmail.com"
      />
      <InfoCard
        icon={VscMail}
        fieldName="LinkedIn"
        href="https://www.linkedin.com/in/danielcasadoaguilar/"
      />
      <InfoCard
        icon={VscMail}
        fieldName="Github"
        href="https://github.com/d01000100/"
      />
      <InfoCard
        icon={VscMail}
        fieldName="itch.io"
        href="https://d1000100.itch.io/"
      />
    </div>
  );
};

export default ContactInfo;
