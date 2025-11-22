import React from "react";
import SectionHeader from "../../core/section-header";
import BusinessIcon from "@/components/icons/resumen/business-icon";
import SchoolIcon from "@/components/icons/resumen/school-icon";
import TimeLine from "@/components/core/time-line/time-line-content";

import { ITimeLine } from "@/definitions/resumen";
import { TFunction } from "i18next";

type Props = {
  t: TFunction<["translation", ...string[]], undefined>;
};
const ExperienceContainer = ({ t }: Props) => {
  const educations =
    (t("education:educations", { returnObjects: true }) as ITimeLine[]) ?? [];
  const experiences =
    (t("experience:experiences", { returnObjects: true }) as ITimeLine[]) ?? [];
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 gap-10 ">
      <article className="">
        <SectionHeader
          className="mb-4"
          icon={<BusinessIcon />}
          title="resumen:section.experience"
        />
        <TimeLine items={experiences} />
      </article>

      <article className="">
        <SectionHeader
          className="mb-4"
          icon={<SchoolIcon />}
          title="resumen:section.education"
        />
        <TimeLine items={educations} />
      </article>
    </section>
  );
};

export default ExperienceContainer;
