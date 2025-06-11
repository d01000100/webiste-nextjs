import { HTMLAttributes } from "react";

import { VscMail, VscGithubInverted } from "react-icons/vsc";
import { FaItchIo } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import classnames from "classnames";

import InfoCard from "../components/InfoCard/InfoCard";

interface ContactInfoProps extends HTMLAttributes<HTMLDivElement> {}

const ContactInfo: React.FunctionComponent<ContactInfoProps> = ({
  className,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className={classnames(
        `flex flex-row flex-wrap items-stretch justify-center gap-4 md:justify-start`,
        className,
      )}
    >
      <InfoCard
        icon={VscMail}
        fieldName="Email"
        value="jdanielca@gmail.com"
        href="mailto:jdanielca@gmail.com"
      />
      <InfoCard
        icon={AiFillLinkedin}
        fieldName="LinkedIn"
        href="https://www.linkedin.com/in/danielcasadoaguilar/"
        value="danielcasadoaguilar"
      />
      <InfoCard
        icon={VscGithubInverted}
        fieldName="Github"
        href="https://github.com/d01000100/"
        value="d01000100"
      />
      <InfoCard
        icon={FaItchIo}
        fieldName="itch.io"
        href="https://d1000100.itch.io/"
        value="d1000100"
      />
    </div>
  );
};

export default ContactInfo;
