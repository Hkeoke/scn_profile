import React from "react";
import PaymentPlanItem from "./payment-plan-item";
import { IAboutMePaymentPlan } from "@/definitions/about-me";
import StarIcon from "@/components/icons/payment-plan/star-icon";
import { PageProps } from "@/definitions/page-types";
import initTranslations from "@/app/i18n";

const PlansContainer = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["about-me"]);

  const services = (await t("about-me:payment_plans.plans", {
    returnObjects: true,
  })) as Record<string, IAboutMePaymentPlan>;

  const plans = Object.keys(services);

  const icons: Record<string, React.ReactNode> = {
    basic: <StarIcon />,
    standard: <StarIcon />,
    premium: <StarIcon />,
    enterprise: <StarIcon />,
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-x-4 gap-y-8">
      {plans?.map((plan) => (
        <PaymentPlanItem key={plan} plan={services[plan]} icon={icons[plan]} />
      ))}
    </section>
  );
};

export default PlansContainer;
