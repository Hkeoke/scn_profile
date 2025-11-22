/* eslint-disable @typescript-eslint/no-explicit-any */
export type ErrorType = {
  title?: string;
  description?: string;
  severity?: "error" | "success" | "info" | "warning";
};

export type HandlerErrorProps = {
  error?: any;
  errors?: any;
  networkError?: boolean;
  closable?: boolean;

  mapError?: (error: any) => ErrorType | null | undefined;
  mapErrors?: (error: any) => ErrorType | ErrorType[] | null | undefined;
};

export const NETWORK_ERROR = {
  title: "errors:notConnection",
  description: "errors:notConnectionMessage",
  severity: "error",
};

export const ERROR = {
  title: "errors:generalError",
  description: "errors:generalErrorMessage",
  severity: "error",
};

export const ERRORS_STATUS: Record<number, any> = {
  404: {
    title: "errors:notFoundError",
    description: "errors:notFoundMessage",
    severity: "error",
  },
  403: {
    title: "errors:permissionError",
    description: "errors:permissionMessage",
    severity: "error",
  },
  401: {
    title: "errors:authError",
    description: "errors:authMessage",
    severity: "error",
  },
};

export const DEFAULT_ERRORS: Record<string, any> = {
  E11000: {
    title: "errors:duplicatedValues",
    description: "errors:duplicatedValuesMessage",
    severity: "error",
  },
  R000: {
    title: "errors:requiredFields",
    description: "errors:requiredFieldsMessage",
    severity: "error",
  },
};
