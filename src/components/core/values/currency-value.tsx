import { cn } from '@/lib/utils';
import React from 'react'; 

type Props =  {
  value: number;
  currency?: string;
  options?: Intl.NumberFormatOptions;
  decimalVariant?: 'normal' | 'small';
  className?: string
};

export const CurrencyValue = ({
  value = 0,
  currency = 'USD',
  options,
  className,
  decimalVariant = 'normal'
}: Props) => {
  const formattedValue = new Intl.NumberFormat('en-US', {
    ...options,
    style: 'currency',
    currency: currency?.toUpperCase()
  }).format(value);

  const [integerPart, decimalPart] = formattedValue.split('.');

  return (
    <span className={cn('flex flex-row items-center justify-center', className)}>
      {integerPart}
      {decimalPart && decimalVariant === 'small' && (
        <span className="align-super text-[10px] font-semibold mb-1">{decimalPart}</span>
      )}
      {decimalPart && decimalVariant === 'normal' && <span>.{decimalPart}</span>}
    </span>
  );
};

export const renderCurrencyValue = (
  value: number,
  currency?: string,
  decimalVariant?: 'normal' | 'small'
) => <CurrencyValue value={value} currency={currency} decimalVariant={decimalVariant} />;
