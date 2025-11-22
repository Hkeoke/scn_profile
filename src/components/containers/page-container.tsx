import React, { PropsWithChildren } from "react";
import * as motion from "motion/react-client";
import { Card } from "../ui/card";
import PageHeader from "../ui/page-header";
type Props = {
  title: string;
};
const PageContainer = ({ children, title }: Props & PropsWithChildren) => {
  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-auto lg:my-4 lg:-translate-x-4 "
    >
      <Card className="w-full md:!rounded-[0_1rem_1rem_0] px-2 md:px-3  !min-h-[33rem] md:max-h-[84vh] md:overflow-y-auto customScroll lg:mr-4 pr-4 mb-4 lg:mb-0">
        <PageHeader
          variant="compuse"
          title={title}
          className="fade-line-bottom"
        />
        {children}
      </Card>
    </motion.div>
  );
};

export default PageContainer;
