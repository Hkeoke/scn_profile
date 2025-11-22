"use server";
import config from "@/lib/admin/config";

export const downloadCV = async (locale: string) => {
  try {
    const response = await fetch(`${config.env.app.url}/api/generate-cv-pdf`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locale,
      }),
    });

    if (!response.ok) {
      throw new Error("No se pudo generar el PDF");
    }

    // Devolver el blob para que el cliente lo maneje
    return {
      success: true,
      blob: await response.blob(),
      filename:
        response.headers
          .get("Content-Disposition")
          ?.match(/filename="(.+)"/)?.[1] || "cv.pdf",
    };
  } catch (error) {
    console.error("Error al descargar el CV:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido",
    };
  }
};
