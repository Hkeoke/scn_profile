"use client";
import { CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/loading";
import dynamic from "next/dynamic";

export const Loading = () => (
  <div className="h-[24rem] md:h-[16rem] w-full bg-transparent border  border-muted flex justify-center items-center">
    <Spinner />
  </div>
);

const ContactMap = dynamic(() => import("./contact-map"), {
  ssr: false,
  loading: () => <Loading />,
});

const ContactMapContainer = () => {
  return (
    <CardContent>
      <div className="h-[24rem] md:h-[16rem] w-full">
        <ContactMap posix={[23.1136, -82.3666]} zoom={18} />
      </div>
    </CardContent>
  );
};

export default ContactMapContainer;
