export interface ITimeLine {
  dateRange: {
    from: string;
    to: string;
  };
  jobTitle: string;
  companyName: string;
  description: string[] | string;
  buttonText?: string;
  className?: string;
  isFirst?: boolean;
  address?: string;

  isButtonVisible?: boolean;
  route?: string;
}
