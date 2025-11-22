import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ITimeLine } from '@/definitions/resumen';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import TimeLineDot from './time-line-dot';
import DateValue from '../values/date-value';
import TransTypography from '../trans-typography';
import Link from 'next/link';

const TimeLineItem = ({
  dateRange,
  jobTitle,
  companyName,
  description,
  buttonText = 'common:showMore',
  className = '',
  isButtonVisible = true,
  isFirst,
  route
}: ITimeLine) => {
  const _description = typeof description === 'string' ? [description] : description;

  return (
    <div className={`relative group ${className}`}>
      <TimeLineDot bg={isFirst ? 'bg-primary' : ''} />
      <TimeLineDot isFirst={isFirst} />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between -mt-0.5  ">
        <div className="flex flex-col flex-1 gap-2 justify-start  ">
          <div className="flex flex-row gap-2 justify-between  items-center ">
            <Badge variant={'outline'} className="leading-normal  border-primary ">
              <DateValue value={dateRange?.from} format="MM-yyyy" /> -{' '}
              {dateRange?.to ? (
                <DateValue value={dateRange?.to} format="MM-yyyy" />
              ) : (
                <TransTypography message="common:present" className="text-md font-medium" />
              )}
            </Badge>
            {isButtonVisible && (
              <Link href={route ?? '/resume'} className="w-full">
                <Button variant={'default'} className="group ml-auto flex flex-row items-center" size={'sm'}>
                  <TransTypography className="text-md sm:text-sm " message={buttonText} />
                  <span className="material-symbols-outlined ml-2 text-md group-hover:translate-x-1 transition-transform duration-300">
                    <ChevronRight />
                  </span>
                </Button>
              </Link>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <p className="text-sm text-primary">{companyName}</p>
            <h3 className="text-color-secondary text-md lg:text-lg font-semibold ">{jobTitle}</h3>

            {/* descripciones */}
            <ul className="flex flex-col gap-2 mt-2 ml-3">
              {_description?.map((desc, index) => (
                <li
                  key={index}
                  className="before:absolute before:top-0 before:left-0 relative before:w-1 before:h-1 before:bg-primary before:rounded-full before:-translate-x-2.5 before:translate-y-2.5 before:shadow-md"
                >
                  <TransTypography message={desc} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineItem;
