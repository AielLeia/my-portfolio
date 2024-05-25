'use client';

import { cn } from '@/utils/cn';
import React, { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';

import animationData from '@/data/confetti.json';

import { BackgroundGradientAnimation } from '@/components/ui/BackgroundGradientAnimation';
import { GridGlobe } from '@/components/ui/GridGlobe';
import { MagicButton } from '@/components/ui/MagicButton';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ['React.js', 'Next.js', 'MongoDB'];
  const rightLists = ['Java', 'Spring Boot', 'MySQL'];

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('ismaelmedbouh@outlook.fr');
    setCopied(true);
  };

  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={cn('h-full', id === 6 && 'flex justify-center h-full')}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>

        <div
          className={cn(
            'absolute right-0 -bottom-5',
            id === 5 && 'w-full opacity-80'
          )}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 items-center justify-center text-white font-bold"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-y-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:pt-10'
          )}
        >
          <div className="font-sans font-extralight text-[#C1C2C3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-xl max-w-96 z-10">
            {title}
          </div>

          {/*{id === 2 && <GridGlobe />}*/}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="relative">
              <div className={cn('absolute -bottom-5 right-0')}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                />
              </div>

              <MagicButton
                title={copied ? 'Email copié' : 'Copier mon e-mail'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161A31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
