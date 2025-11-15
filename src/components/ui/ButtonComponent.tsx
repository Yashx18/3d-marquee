import { cn } from '@/lib/utils'
import React from 'react'

interface componentProps {
	className?: string,
	children?: React.ReactNode,
}



export const ButtonComponent = ({children, className, ...props} : componentProps) => {
  return (
	  <div className={cn('flex items-center justify-center p-6 gap-5',className)}>
		  {children}
	</div>
  )
}

export const ButtonTitle = ({children, className, ...props} : componentProps) => {
  return (
	  <div className={cn('uppercase text-md',className)}>
		  {children}
	</div>
  )
}

export const ButtonSubTitle = ({children, className, ...props} : componentProps) => {
  return (
	  <div className={cn('text-sm max-w-64 text-neutral-500',className)}>
		  {children}
	</div>
  )
}

export const ButtonIcon = ({children, className, ...props} : componentProps) => {
  return (
	  <div className={cn('flex items-center justify-center ',className)}>
		  {children}
	</div>
  )
}

export const ButtonHeader = ({children, className, ...props} : componentProps) => {
  return (
    <div className={cn('flex flex-col items-start justify-center gap-1', className)}>{children}</div>
  );
}

