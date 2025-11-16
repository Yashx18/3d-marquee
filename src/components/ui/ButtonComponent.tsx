import { cn } from '@/lib/utils';
import React from 'react';

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const ButtonComponent = ({ children, className, ...props }: ComponentProps) => {
  return (
    <div className={cn('flex flex-col lg:flex-row items-center justify-center w-full md:gap-5 gap-3 sm:p-6 p-3', className)} {...props}>
      {children}
    </div>
  );
};

export const ButtonTitle = ({ children, className, ...props }: ComponentProps) => {
  return (
    <div className={cn('text-md uppercase', className)} {...props}>
      {children}
    </div>
  );
};

export const ButtonSubTitle = ({ children, className, ...props }: ComponentProps) => {
  return (
    <div className={cn('md:block hidden max-w-64 text-sm text-neutral-400', className)} {...props}>
      {children}
    </div>
  );
};

export const ButtonIcon = ({ children, className, ...props }: ComponentProps) => {
  return (
    <div className={cn('flex items-center justify-center', className)} {...props}>
      {children}
    </div>
  );
};

export const ButtonHeader = ({ children, className, ...props }: ComponentProps) => {
  return (
    <div className={cn('flex flex-col items-start justify-center gap-1', className)} {...props}>
      {children}
    </div>
  );
};
