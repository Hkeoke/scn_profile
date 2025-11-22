"use client";
import { memo } from "react";
import { Trans } from "react-i18next";

export const defaultComponents = {
  primary: <span className="text-primary" />,
  secondary: <span className="text-secondary" />,
  white: <span className="text-white" />,
  error: <span className="text-red-600" />,
  bold: <span className="font-bold" />,
  semibold: <span className="font-semibold" />,
  br: <br />,
  breakWord: <p className="!pt-2 md:pt-4" />,
  mbr: <p className="!ml-5" />,
};

export type TransTypographyProps = {
  message: string;
  values?: object;
  components?: object;
  className?: string;
};

const TransTypography = ({
  message,
  values = {},
  components = {},
  className,
}: TransTypographyProps) => {
  return (
    <span className={className}>
      <Trans
        i18nKey={message}
        components={{ ...defaultComponents, ...components }}
        values={values}
      />
    </span>
  );
};

export default memo(TransTypography);
