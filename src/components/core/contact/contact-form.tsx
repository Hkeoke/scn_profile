"use client";
import React from "react";
import {
  FormTextField,
  FormTextareaField,
  ButtonLoading,
  Form,
} from "@/components/core/form-fields";
import useSendContact from "@/hooks/use-send-contact";
import { useTranslation } from "react-i18next";
import { HandlerError } from "../handle-error";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { t } = useTranslation("contact");
  const form = useSendContact();

  return (
    <Form {...form}>
      <div className="grid grid-cols-2 gap-3 lg:gap-6">
        <div className="col-span-2">
          <HandlerError error={form?.error} />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <FormTextField
            name="name"
            placeholder={t("fields.fullName")}
            required
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <FormTextField
            type="email"
            name="email"
            placeholder={t("fields.email")}
            required
          />
        </div>

        <div className="col-span-2">
          <FormTextareaField
            name="message"
            label={t("fields.message")}
            required
            rows={6}
          />
        </div>

        <div className="col-span-2 mt-2 flex items-center w-full justify-end">
          <ButtonLoading
            type="submit"
            loading={form?.isLoading}
            disabled={form?.isLoading}
            size={"lg"}
            className="uppercase hover:scale-105 transition-all duration-100"
          >
            {t("common:contactMe")}
            <Send />
          </ButtonLoading>
        </div>
      </div>
    </Form>
  );
};

export default ContactForm;
