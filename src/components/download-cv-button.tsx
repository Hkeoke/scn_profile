"use client";

import { downloadCV } from "@/app/actions/download-cv";
import { CloudDownloadIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Loading } from "./ui/loading";
import TransTypography from "./core/trans-typography";

export function DownloadCVButton({ locale }: { locale: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const result = await downloadCV(locale);

      if (!result.success) {
        alert(result.error || "Error al descargar el CV");
        return;
      }

      // Esta parte solo se ejecuta en el cliente
      const { blob, filename } = result;
      const url = window.URL.createObjectURL(blob as Blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename ?? "cv.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Error inesperado al descargar el CV");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      variant="ghost"
      className="w-full button-rectangle flex items-center group uppercase"
      disabled={isLoading}
    >
      {isLoading ? (
        <Loading size="md" />
      ) : (
        <>
          <TransTypography message="common:downloadCV" />
          <CloudDownloadIcon className="group-hover:animate-bounce" />
        </>
      )}
    </Button>
  );
}
