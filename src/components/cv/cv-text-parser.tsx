// text-parser.tsx
import React from "react";
import { Text } from "@react-pdf/renderer";
import { styles } from "./cv-styles";

type TextProps = { children?: React.ReactNode };

// 1. Crear componentes compatibles con react-pdf
export const pdfComponents = {
  primary: (props: TextProps) => <Text style={styles.primary} {...props} />,
  secondary: (props: TextProps) => <Text style={styles.secondary} {...props} />,
  white: (props: TextProps) => <Text style={styles.white} {...props} />,
  error: (props: TextProps) => <Text style={styles.error} {...props} />,
  bold: (props: TextProps) => <Text style={styles.bold} {...props} />,
  semibold: (props: TextProps) => <Text style={styles.semibold} {...props} />,
};

const tagRegex = /<(\w+)>(.*?)<\/\1>/g;

export const parseI18nText = (text: string) => {
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = tagRegex.exec(text)) !== null) {
    // Agregar texto antes del match
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    const [fullMatch, tag] = match;

    // Manejar tags de auto-cierre como <breakWord/>
    if (fullMatch.endsWith("/>") || !fullMatch.includes("</")) {
      const Component = pdfComponents[tag as keyof typeof pdfComponents];
      if (Component) {
        elements.push(<Component key={match.index} />);
      }
    }
    // Manejar tags con contenido como <primary>texto</primary>
    else {
      const content = match[2];
      const Component = pdfComponents[tag as keyof typeof pdfComponents];
      if (Component) {
        elements.push(<Component key={match.index}>{content}</Component>);
      } else {
        elements.push(content);
      }
    }

    lastIndex = match.index + fullMatch.length;
  }

  // Agregar texto restante
  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements;
};
