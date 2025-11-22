"use client";
import React, { createContext, PropsWithChildren, useContext } from "react";
import { Control, FieldValues, UseFormReset } from "react-hook-form";

// Data value of the provider context
type FormContextValue = {
  isLoading?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  size?: "small" | "middle" | "large";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<FieldValues | any> | undefined;
  dark?: boolean;
  formState?: never;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch?: (_field: string) => any;
  setValue?: (_field: never, _value: never) => void;
  reset?: UseFormReset<FieldValues>;
};
// default value of the context
const defaultValue: FormContextValue = {
  isLoading: false,
  disabled: false,
  readOnly: false,
};

// create context
const FormContext = createContext<FormContextValue>(defaultValue);

// Proptypes of Provider component
type FormContextProps = FormContextValue &
  PropsWithChildren &
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >;

/**
 * Provider component
 * */
export const Form = ({
  isLoading,
  size,
  disabled,
  readOnly,
  control,
  dark,
  watch,
  formState,
  setValue,
  reset,
  ...props
}: FormContextProps) => {
  return (
    <FormContext.Provider
      value={{
        isLoading,
        disabled,
        readOnly,
        control,
        size,
        dark,
        watch,
        formState,
        setValue,
        reset,
      }}
    >
      <form {...props} />
    </FormContext.Provider>
  );
};

// Default hook to retrieve context data
export const useDFLForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    return defaultValue;
  }
  return context;
};
