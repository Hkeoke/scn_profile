"use client";
import React, { memo } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  FormFieldControl,
  FormFieldProps,
} from "@/components/core/form-fields/fields/form-field-control";
import { FormLabel } from "@/components/ui/form";
import { ControllerFieldState } from "react-hook-form";

type Props = {
  value: string;
  onChange?: (e: never) => void;
  fieldState: ControllerFieldState;
  required?: boolean;
  error?: boolean;
  label?: string;
};

const TextareaField = ({
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
          className={fieldState?.error?.message || error ? "text-red-500" : ""}
        >
          <div className="flex items-center gap-1">
            {required && (
              <div className="h-[6px] w-[6px] rounded-[6px] bg-red-500" />
            )}
            {label}
          </div>
        </FormLabel>
      )}
      <div className="relative w-full">
        {required && !label && (
          <span className="absolute left-3 top-3 z-[1] h-[6px] w-[6px] rounded-[6px] bg-red-500" />
        )}
        <Textarea value={value} onChange={onChange} {...props} />
      </div>
    </>
  );
};

const FormTextareaField = (
  props: FormFieldProps & { className?: string; rows?: number },
) => {
  return <FormFieldControl {...props} Component={TextareaField} />;
};

export default memo(FormTextareaField);
