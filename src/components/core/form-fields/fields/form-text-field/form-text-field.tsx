"use client";
import React, { memo } from "react";
import { Input } from "@/components/ui/input";
import {
  FormFieldControl,
  FormFieldProps,
} from "@/components/core/form-fields/fields/form-field-control";
import { FormLabel } from "@/components/ui/form";
import { ControllerFieldState } from "react-hook-form";

type Props = {
  value: string;
  onChange?: (e: unknown) => void;
  fieldState: ControllerFieldState;
  required?: boolean;
  error?: boolean;
  label?: string;
};

export const InputField = ({
  value,
  onChange,
  fieldState,
  required,
  label,
  error,
  ...props
}: Props) => {
  return (
    <>
      {label && (
        <FormLabel
          className={
            fieldState?.error?.message || error ? "text-[#F10C00]" : ""
          }
        >
          <div className="flex items-center gap-1">
            {required && (
              <div className="h-[6px] w-[6px] rounded-[6px] bg-[#F10C00]" />
            )}
            {label}
          </div>
        </FormLabel>
      )}
      <div className="relative w-full">
        {required && !label && (
          <span className="absolute left-3 top-3 z-[1] h-[6px] w-[6px] rounded-[6px] bg-red-500" />
        )}
        <Input value={value} onChange={onChange} {...props} />
      </div>
    </>
  );
};

const FormTextField = (
  props: FormFieldProps & {
    className?: string;
  } & React.ComponentProps<"input">,
) => {
  return <FormFieldControl Component={InputField} {...props} />;
};

export default memo(FormTextField);
