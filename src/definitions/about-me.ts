import { ReactNode } from "react";

export interface IAboutMeService {
  title: string;
  description: string;
  icon: ReactNode;
  span?: boolean;
}

export interface IAboutMePaymentPlan {
  title: string;
  description: string;
  icon: ReactNode;
  price: number;
  services: string[];
}
