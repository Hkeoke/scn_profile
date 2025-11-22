import { ITimeLine } from "@/definitions/resumen";
import React from "react";
import TimeLineItem from "./time-line-item";

type Props = {
  items: ITimeLine[];
};

const TimeLine = ({ items }: Props) => {
  return (
    <div className="p-2">
      <div className="relative border-l border-gray-500 pl-6 flex flex-col gap-8 justify-start ">
        {items?.map((item, index) => (
          <TimeLineItem key={item?.jobTitle} {...item} isFirst={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
