import React from 'react';
import { TemplateIcon, UIBlocksIcon, UIKitIcon } from '../icons/Icons';
import {
  ButtonComponent,
  ButtonTitle,
  ButtonSubTitle,
  ButtonIcon,
  ButtonHeader,
} from '@/components/ui/ButtonComponent';
import { cn } from '@/lib/utils';

export const TemplateComponent = () => {
  const images = [
    {
      src: '/accounting.png',
      alt: 'Accounting template Image',
    },
    {
      src: '/award.png',
      alt: 'Studio template Image',
    },
    {
      src: '/deal.png',
      alt: 'Deal template Image',
    },
  ];
  const images2 = [
    {
      src: '/award.png',
      alt: 'Studio template Image',
    },
    {
      src: '/deal.png',
      alt: 'Deal template Image',
    },
    {
      src: '/accounting.png',
      alt: 'Accounting template Image',
    },
  ];
  const images3 = [
    {
      src: '/deal.png',
      alt: 'Deal template Image',
    },
    {
      src: '/accounting.png',
      alt: 'Accounting template Image',
    },
    {
      src: '/award.png',
      alt: 'Studio template Image',
    },
  ];
  return (
    <div className="bg-tailwind-100 justify- flex w-full flex-col items-center gap-4 py-10">
      {/* Buttons Row */}
      <div
        className={cn(
          'divide-lines-100 relative flex w-full items-center justify-between divide-x select-none',
          // BEFORE CLASSNAME
          'before:bg-lines-100 before:absolute before:top-0 before:h-px before:w-full before:content-[""]',
          // AFTER CLASSNAME
          'after:bg-lines-100 after:absolute after:bottom-0 after:h-px after:w-full after:content-[""]'
        )}
      >
        {/* First Button */}
        <ButtonComponent>
          {/* ICON */}
          <ButtonIcon>
            <TemplateIcon className="text-neutral-500" />
          </ButtonIcon>
          {/* TEXT CONTENT */}
          <ButtonHeader>
            {/* TITLE */}
            <ButtonTitle className="text-neutral-200">Templates</ButtonTitle>
            {/* SUBTITLE */}
            <ButtonSubTitle>
              Visually stunning, easy to customize site templates built with React and Next.js.
            </ButtonSubTitle>
          </ButtonHeader>
        </ButtonComponent>

        {/* Second Button */}
        <ButtonComponent>
          {/* ICON */}
          <ButtonIcon>
            <UIBlocksIcon className="text-neutral-500" />
          </ButtonIcon>
          {/* TEXT CONTENT */}
          <ButtonHeader>
            {/* TITLE */}
            <ButtonTitle className="text-neutral-200">Ui Blocks</ButtonTitle>
            {/* SUBTITLE */}
            <ButtonSubTitle>
              Over 500+ professionally designed, fully responsive, expertly crafted components.
            </ButtonSubTitle>
          </ButtonHeader>
        </ButtonComponent>

        {/* Third Button */}
        <ButtonComponent>
          {/* ICON */}
          <ButtonIcon>
            <UIKitIcon className="text-neutral-500" />
          </ButtonIcon>
          {/* TEXT CONTENT */}
          <ButtonHeader>
            {/* TITLE */}
            <ButtonTitle className="text-neutral-200">ui Kit</ButtonTitle>
            {/* SUBTITLE */}
            <ButtonSubTitle>
              A starter kit for building your own component systems with React and Tailwind CSS.
            </ButtonSubTitle>
          </ButtonHeader>
        </ButtonComponent>
      </div>
      {/* Marquee Box */}
      <div
        className={cn(
          'bg-lines-100/30 relative flex w-full items-center justify-center p-1.5',
          // BEFORE CLASSNAME
          'before:bg-lines-100 before:absolute before:top-0 before:h-px before:w-full before:content-[""]',
          // AFTER CLASSNAME
          'after:bg-lines-100 after:absolute after:bottom-0 after:h-px after:w-full after:content-[""]'
        )}
      >
        {/* Marquee Container */}
        {/* rotate-x-55 rotate-y-0 -rotate-z-45 */}
        <div className="bg-tailwind-100 grid h-130 w-full transform grid-cols-3 gap-18 overflow-hidden rounded-2xl border border-neutral-800/40 perspective-distant transform-3d">
          <div className="animate-infinite-scroll bg-lines-100 col-span-1 flex rotate-x-55 rotate-y-0 -rotate-z-45 flex-col items-center justify-center gap-6 text-neutral-200 opacity-50">
            {[...images, ...images, ...images].map((item, index) => (
              <img src={item.src} alt={item.alt} key={index} />
            ))}
            <div />
          </div>
          <div className="bg-lines-100 animate-infinite-scroll-reverse col-span-1 flex rotate-x-55 rotate-y-0 -rotate-z-45 flex-col items-center justify-between gap-6 text-neutral-200 opacity-50 transform-3d">
            {[...images2, ...images2, ...images2].map((item, index) => (
              <img src={item.src} alt={item.alt} key={index} />
            ))}
            <div />
          </div>
          <div className="bg-lines-100 animate-infinite-scroll col-span-1 flex rotate-x-55 rotate-y-0 -rotate-z-45 flex-col items-center justify-between gap-6 text-neutral-200 opacity-50 transform-3d">
            {[...images3, ...images3, ...images3].map((item, index) => (
              <img src={item.src} alt={item.alt} key={index} />
            ))}
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};
