"use client";
import React, { useCallback } from "react";
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { DownloadCVButton } from "../download-cv-button";
import TransTypography from "../core/trans-typography";

const ProfileActions = ({ locale }: { locale: string }) => {
  const { push } = useRouter();

  const goToContact = useCallback(
    (to: string) => {
      push(to);
    },
    [push],
  );

  return (
    <CardFooter className="mt-auto w-full !px-2 m-0 grid grid-cols-2 justify-between fade-line-top">
      <DownloadCVButton locale={locale} />

      <Button
        variant="ghost"
        className="w-full button-rectangle flex items-center group fade-line-left uppercase"
        onClick={() => goToContact("/contact#form")}
      >
        <TransTypography message="common:contactMe" />
        <Send className="group-hover:animate-bounce" />
      </Button>
    </CardFooter>
  );
};

export default ProfileActions;
