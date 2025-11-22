import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};
const Logo = ({ className }: Props) => {
  return (
    <Image
      alt="logo"
      src={"/favicon.svg"}
      width={24}
      height={24}
      className={className}
    />
  );
};

export default Logo;
