'use client';
import React, { useState } from 'react';
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
  const [active, setActive] = useState<string>('templates');
  console.log(active);
  const currentPage = ({ page }: { page: string }) => {
    setActive(page);
  };

  // Template Images

  const templateImages = [
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
  const templateImages2 = [
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
  const templateImages3 = [
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

  // UI KIT Images
  const kitImages = [
    { src: '/img1.png', alt: 'UIKitImages 1' },
    { src: '/img2.png', alt: 'UIKitImages 2' },
    { src: '/img3.png', alt: 'UIKitImages 3' },
  ];
  const kitImages2 = [
    { src: '/img2.png', alt: 'UIKitImages 2' },
    { src: '/img3.png', alt: 'UIKitImages 3' },
    { src: '/img1.png', alt: 'UIKitImages 1' },
  ];
  const kitImages3 = [
    { src: '/img3.png', alt: 'UIKitImages 3' },
    { src: '/img1.png', alt: 'UIKitImages 1' },
    { src: '/img2.png', alt: 'UIKitImages 2' },
  ];

  // UI BLOCK Images
  const BlockImages = [
    { src: '/blockImg1.png', alt: 'blockImg1.png' },
    { src: '/blockImg2.png', alt: 'blockImg2.png' },
    { src: '/blockImg3.png', alt: 'blockImg3.png' },
    { src: '/blockImg4.png', alt: 'blockImg4.png' },
    { src: '/blockImg5.png', alt: 'blockImg5.png' },
    { src: '/blockImg7.png', alt: 'blockImg7.png' },
    { src: '/blockImg8.png', alt: 'blockImg8.png' },
    { src: '/blockImg9.png', alt: 'blockImg9.png' },
    { src: '/blockImg10.png', alt: 'blockImg10.png' },
    { src: '/blockImg11.png', alt: 'blockImg11.png' },
    { src: '/blockImg12.png', alt: 'blockImg12.png' },
    { src: '/blockImg13.png', alt: 'blockImg13.png' },
    { src: '/blockImg14.png', alt: 'blockImg14.png' },
    { src: '/blockImg15.png', alt: 'blockImg15.png' },
  ];
  const BlockImages2 = [
    { src: '/blockImg7.png', alt: 'blockImg7.png' },
    { src: '/blockImg3.png', alt: 'blockImg3.png' },
    { src: '/blockImg12.png', alt: 'blockImg12.png' },
    { src: '/blockImg1.png', alt: 'blockImg1.png' },
    { src: '/blockImg14.png', alt: 'blockImg14.png' },
    { src: '/blockImg5.png', alt: 'blockImg5.png' },
    { src: '/blockImg10.png', alt: 'blockImg10.png' },
    { src: '/blockImg9.png', alt: 'blockImg9.png' },
    { src: '/blockImg2.png', alt: 'blockImg2.png' },
    { src: '/blockImg13.png', alt: 'blockImg13.png' },
    { src: '/blockImg8.png', alt: 'blockImg8.png' },
    { src: '/blockImg4.png', alt: 'blockImg4.png' },
    { src: '/blockImg15.png', alt: 'blockImg15.png' },
    { src: '/blockImg11.png', alt: 'blockImg11.png' },
  ];

  const BlockImages3 = [
    { src: '/blockImg14.png', alt: 'blockImg14.png' },
    { src: '/blockImg3.png', alt: 'blockImg3.png' },
    { src: '/blockImg11.png', alt: 'blockImg11.png' },
    { src: '/blockImg8.png', alt: 'blockImg8.png' },
    { src: '/blockImg1.png', alt: 'blockImg1.png' },
    { src: '/blockImg13.png', alt: 'blockImg13.png' },
    { src: '/blockImg7.png', alt: 'blockImg7.png' },
    { src: '/blockImg10.png', alt: 'blockImg10.png' },
    { src: '/blockImg4.png', alt: 'blockImg4.png' },
    { src: '/blockImg15.png', alt: 'blockImg15.png' },
    { src: '/blockImg2.png', alt: 'blockImg2.png' },
    { src: '/blockImg9.png', alt: 'blockImg9.png' },
    { src: '/blockImg5.png', alt: 'blockImg5.png' },
    { src: '/blockImg12.png', alt: 'blockImg12.png' },
  ];

  return (
    <div className="bg-tailwind-100 flex w-full flex-col items-center justify-center gap-3 py-10">
      {/* Buttons Row */}
      <div
        className={cn(
          'divide-lines-100 sm:overflow-x-none relative flex w-full items-center justify-between divide-x select-none max-sm:overflow-x-scroll',
          // BEFORE
          'before:bg-lines-100 before:absolute before:top-0 before:h-px before:w-screen before:content-[""] sm:before:left-[calc(50%-50vw)]',
          // AFTER
          'after:bg-lines-100 after:absolute after:bottom-0 after:left-[calc(50%-50vw)] after:h-px after:w-screen after:content-[""]'
        )}
      >
        {/* First Button */}
        <ButtonComponent
          className={cn('group', active == 'templates' ? 'bg-pink-500/5' : null)}
          onClick={() => currentPage({ page: 'templates' })}
        >
          {/* ICON */}
          <ButtonIcon>
            <TemplateIcon
              className={cn(
                'text-neutral-200 duration-200 group-hover:-translate-y-0.5',
                active == 'templates' ? 'text-pink-500' : null
              )}
            />
          </ButtonIcon>
          {/* TEXT CONTENT */}
          <ButtonHeader>
            {/* TITLE */}
            <ButtonTitle
              className={cn(active == 'templates' ? 'text-pink-500' : 'text-neutral-200')}
            >
              Templates
            </ButtonTitle>
            {/* SUBTITLE */}
            <ButtonSubTitle>
              Visually stunning, easy to customize site templates built with React and Next.js.
            </ButtonSubTitle>
          </ButtonHeader>
        </ButtonComponent>

        {/* Second Button */}
        <ButtonComponent
          className={cn('group', active == 'UIBlocks' ? 'bg-violet-500/5' : null)}
          onClick={() => currentPage({ page: 'UIBlocks' })}
        >
          {/* ICON */}
          <ButtonIcon>
            <UIBlocksIcon
              className={cn(
                'text-neutral-200 duration-200',
                active == 'UIBlocks' ? 'text-violet-400' : null
              )}
            />
          </ButtonIcon>
          {/* TEXT CONTENT */}
          <ButtonHeader>
            {/* TITLE */}
            <ButtonTitle
              className={cn(active == 'UIBlocks' ? 'text-violet-500' : 'text-neutral-200')}
            >
              Ui Blocks
            </ButtonTitle>
            {/* SUBTITLE */}
            <ButtonSubTitle>
              Over 500+ professionally designed, fully responsive, expertly crafted components.
            </ButtonSubTitle>
          </ButtonHeader>
        </ButtonComponent>

        {/* Third Button */}
        <ButtonComponent
          className={cn('group', active == 'UIKits' ? 'bg-sky-500/5' : null)}
          onClick={() => currentPage({ page: 'UIKits' })}
        >
          {/* ICON */}
          <ButtonIcon>
            <UIKitIcon
              className={cn(
                'text-neutral-200 duration-200',
                active == 'UIKits' ? 'text-sky-500' : null
              )}
            />
          </ButtonIcon>
          {/* TEXT CONTENT */}
          <ButtonHeader>
            {/* TITLE */}
            <ButtonTitle
              className={cn('text-neutral-200', active == 'UIKits' ? 'text-sky-500' : null)}
            >
              ui Kit
            </ButtonTitle>
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
          'before:bg-lines-100 before:absolute before:top-0 before:left-[calc(50%-50vw)] before:h-px before:w-screen before:content-[""]',
          // AFTER CLASSNAME
          'after:bg-lines-100 after:absolute after:bottom-0 after:left-[calc(50%-50vw)] after:h-px after:w-screen after:content-[""]'
        )}
      >
        {/* Marquee Container */}
        <div className="bg-tailwind-100 relative h-100 w-full overflow-hidden rounded-2xl ring ring-neutral-800/40 perspective-distant transform-3d md:h-130">
          <div className="absolute top-0 -right-20 grid h-full w-screen rotate-x-35 rotate-y-0 -rotate-z-50 rounded-2xl border-white">
            <div className="grid w-full grid-cols-3 gap-10 rounded-2xl">
              <div className="animate-infinite-scroll border-px border-lines-100/60 col-span-1 flex -translate-y-190 flex-col items-center justify-center gap-6 border-x text-neutral-200 opacity-50">
                {active == 'templates' &&
                  [...templateImages, ...templateImages, ...templateImages].map((item, index) => (
                    <img src={item.src} alt={item.alt} key={index} />
                  ))}
                {active == 'UIBlocks' &&
                  [...BlockImages, ...BlockImages, ...BlockImages].map((item, index) => (
                    <img src={item.src} alt={item.alt} key={index} />
                  ))}
                {active == 'UIKits' &&
                  [...kitImages, ...kitImages, ...kitImages].map((item, index) => (
                    <img src={item.src} alt={item.alt} key={index} />
                  ))}
                <div />
              </div>
              <div className="animate-infinite-scroll-reverse border-whitetransform-3d border-px border-lines-100/60 col-span-1 flex flex-col items-center justify-between gap-6 border-x text-neutral-200 opacity-50">
                {active == 'templates' &&
                  [...templateImages2, ...templateImages2, ...templateImages2].map(
                    (item, index) => <img src={item.src} alt={item.alt} key={index} />
                  )}
                {active == 'UIBlocks' &&
                  [...BlockImages2, ...BlockImages2, ...BlockImages2].map((item, index) => (
                    <img src={item.src} alt={item.alt} key={index} />
                  ))}
                {active == 'UIKits' &&
                  [...kitImages2, ...kitImages2, ...kitImages2].map((item, index) => (
                    <img src={item.src} alt={item.alt} key={index} />
                  ))}
                <div />
              </div>
              <div className="animate-infinite-scroll border-px border-lines-100/60 col-span-1 flex -translate-y-10 flex-col items-center justify-between gap-6 border-x text-neutral-200 opacity-50 transform-3d">
                {active == 'templates' &&
                  [...templateImages3, ...templateImages3, ...templateImages3].map(
                    (item, index) => <img src={item.src} alt={item.alt} key={index} />
                  )}
                {active == 'UIBlocks' &&
                  [...BlockImages3, ...BlockImages3, ...BlockImages3].map((item, index) => (
                    <img src={item.src} alt={item.alt} key={index} />
                  ))}
                {active == 'UIKits' &&
                  [...kitImages3, ...kitImages3, ...kitImages3].map((item, index) => (
                    <img src={item.src} alt={item.alt} key={index} />
                  ))}
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
