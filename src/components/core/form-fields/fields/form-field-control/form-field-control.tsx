import { ElementType, memo, ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useDFLForm } from "@/components/core/form-fields";
import { Control, FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export type FormFieldProps = {
  Component?: ElementType;
  control?: Control<FieldValues> | undefined;
  name: string;
  isLoading?: boolean;
  label?: string | ReactNode;
  placeholder?: string;
  description?: string;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  helperText?: ReactNode | string;
  options?: { value: string; label: string }[];
  hideDescription?: boolean;
  fetchFunc?: (
    params?: Record<string, unknown>,
    config?: unknown,
  ) => Promise<{
    data: unknown[];
    total: number;
    hasMore: boolean;
  }>;
  queryKey?: string;
  className?: string;
};

const FormFieldControl = ({
  control,
  name,
  Component,
  disabled,
  required,
  label,
  description,
  placeholder,
  error,
  options,
  hideDescription,
  ...props
}: FormFieldProps) => {
  const { t } = useTranslation();
  const {
    isLoading,
    disabled: superDisabled,
    control: superControl,
  } = useDFLForm();

  return (
    <FormField
      control={superControl || control}
      name={name}
      disabled={superDisabled || disabled || isLoading}
      render={({ field, fieldState }) => {
        return (
          <FormItem>
            <FormControl>
              {Component && (
                <Component
                  control={superControl || control}
                  disabled={superDisabled || disabled || isLoading}
                  placeholder={placeholder}
                  required={required}
                  // ref={field?.ref}
                  error={error || Boolean(fieldState.invalid)}
                  label={label}
                  fieldState={fieldState}
                  options={options}
                  description={description}
                  {...field}
                  {...props}
                  className={cn(
                    fieldState?.error?.message || error
                      ? props?.className +
                          " rounded-[16px] !ring-2 !ring-red-500 ring-offset-2 focus-visible:!ring-red-500"
                      : props?.className,
                  )}
                />
              )}
            </FormControl>
            {!hideDescription && description && (
              <FormDescription>{description}</FormDescription>
            )}
            {fieldState?.error && (
              <FormMessage>
                {(fieldState?.error?.message &&
                  t(fieldState?.error?.message)) ||
                  props?.helperText}
              </FormMessage>
            )}
          </FormItem>
        );
      }}
    />
  );
};

export default memo(FormFieldControl);
