/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Collapsible } from "@/components/ui/collapsible";
import {
  ERRORS_STATUS,
  DEFAULT_ERRORS,
  HandlerErrorProps,
  NETWORK_ERROR,
  ERROR,
} from "@/definitions/error-handle.interfaces";

import useToggle from "@/hooks/use-toggle";
import React, { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

const getError = (error: any) => {
  const errorGlobal = ERRORS_STATUS[error?.statusCode];
  if (
    errorGlobal?.title === "Errors.authError" &&
    error.error === "BAD_CREDENTIALS"
  ) {
    return undefined;
  }
  if (DEFAULT_ERRORS[error.reference]) {
    return DEFAULT_ERRORS[error.reference];
  }
  return errorGlobal;
};

const HandlerError = ({
  error,
  errors = {},
  networkError,
  mapError,
  closable = true,
  mapErrors,
  className,
}: HandlerErrorProps & { className?: string }) => {
  const { t } = useTranslation();
  const { isOpen, onClose } = useToggle(!!error);

  const currentError = useMemo(() => {
    if (networkError) return NETWORK_ERROR;
    if (!error) return null;
    if (error?.networkError) return NETWORK_ERROR;
    return (
      errors[error?.reference || error?.statusCode] ||
      mapError?.(error) ||
      mapErrors?.(error) ||
      getError(error) ||
      ERROR
    );
  }, [error, errors, networkError, mapErrors, mapError]);

  if (Array.isArray(currentError) && currentError.length > 0) {
    return (
      <Collapsible open={isOpen} className={className}>
        <Alert variant={"destructive"} onClick={closable ? onClose : undefined}>
          {currentError.map((error, index) => (
            <div className="mb-4" key={index}>
              {error.title && index === 0 && (
                <AlertTitle>{t(error.title)}</AlertTitle>
              )}
              <div className="flex-con flex items-center justify-start gap-1">
                {t(error.description)}
              </div>
            </div>
          ))}
        </Alert>
      </Collapsible>
    );
  }

  return (
    <Collapsible open={isOpen} className={className}>
      {currentError && (
        <Alert
          variant={/*currentError.severity || */ "destructive"}
          onClick={closable ? onClose : undefined}
          className={"flex-con mb-4 flex items-start justify-start gap-1"}
        >
          <div
            className={"mt-[2px] flex w-full items-start justify-start gap-1"}
          >
            {currentError.title && <AlertTitle>{t(error.title)}</AlertTitle>}
            <div>{t(currentError.description)}</div>
          </div>
        </Alert>
      )}
    </Collapsible>
  );
};

export default memo(HandlerError);
