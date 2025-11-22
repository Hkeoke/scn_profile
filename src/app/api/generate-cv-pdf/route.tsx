import { NextRequest, NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import { CvTemplate } from "@/components/cv/cv-template";
import initTranslations from "@/app/i18n";

const i18nNamespaces = [
  "common",
  "errors",
  "about-me",
  "experience",
  "education",
  "resumen",
];
export async function POST(request: NextRequest) {
  const { locale } = await request.json();
  try {
    // Inicializar i18next en el servidor
    const { t } = await initTranslations(locale, i18nNamespaces);

    // Generar PDF con las traducciones
    const stream = await renderToStream(<CvTemplate t={t} />);

    // Convierte el stream a un buffer
    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="cv-${locale}.pdf"`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Error generating PDF" },
      { status: 500 },
    );
  }
}
