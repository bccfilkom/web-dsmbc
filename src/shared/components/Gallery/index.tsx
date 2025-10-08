"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export const Gallery = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);

    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isDesktop ? (
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex gap-5 items-end justify-center">
            <Image
              src="/images/pattern-1.svg"
              alt="-"
              className="items-end lg:w-[85px] lg:h-[143px]"
              width={33}
              height={75}
            />
            <div className="relative w-[156px] h-[153px] lg:w-[398px] lg:h-[293px] overflow-hidden rounded-xl lg:rounded-3xl">
              <Image src="/images/Photo2.svg" alt="DSMBC 2024" fill className="object-cover" />
            </div>
            <div className="relative w-[157px] h-[153px] lg:w-[295px] lg:h-[293px] overflow-hidden rounded-xl lg:rounded-3xl">
              <Image src="/images/Photo3.svg" alt="DSMBC 2024" fill className="object-cover" />
            </div>
            <div className="relative w-[199px] h-[153px] lg:w-[398px] lg:h-[293px] overflow-hidden rounded-xl lg:rounded-3xl">
              <Image src="/images/Photo6.svg" alt="DSMBC 2024" fill className="object-cover" />
            </div>
          </div>

          <div className="flex gap-5 items-start justify-center">
            <div className="relative w-[116px] h-[153px] lg:w-[295px] lg:h-[293px] overflow-hidden rounded-xl lg:rounded-3xl">
              <Image src="/images/Photo4.svg" alt="DSMBC 2024" fill className="object-cover" />
            </div>
            <div className="relative w-[198px] h-[153px] lg:w-[505px] lg:h-[293px] overflow-hidden rounded-xl lg:rounded-3xl">
              <Image src="/images/Photo5.svg" alt="DSMBC 2024" fill className="object-cover" />
            </div>
            <div className="relative w-[156px] h-[153px] lg:w-[295px] lg:h-[293px] overflow-hidden rounded-xl lg:rounded-3xl">
              <Image src="/images/Photo7.svg" alt="DSMBC 2024" fill className="object-cover" />
            </div>
            <Image
              src="/images/pattern-2.svg"
              alt="-"
              className="items-start lg:w-[85px] lg:h-[193px]"
              width={33}
              height={100}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex gap-2 items-end justify-center">
            <Image
              src="/images/pattern-1.svg"
              alt="-"
              className="items-end"
              width={33}
              height={75}
            />
            <div className="relative w-[156px] h-[153px] overflow-hidden rounded-xl">
              <Image src="/images/Photo2.svg" alt="DSMBC 2024" fill className="object-cover" />
            </div>
            <div className="relative w-[157px] h-[153px] overflow-hidden rounded-xl">
              <Image src="/images/Photo3.svg" alt="DSMBC 2024" fill className="object-cover" />
            </div>
          </div>
          <div className="flex gap-2 items-start justify-center">
            <div className="relative w-[116px] h-[153px] overflow-hidden rounded-xl">
              <Image src="/images/Photo4.svg" alt="DSMBC 2024" fill className="object-cover" />
            </div>
            <div className="relative w-[198px] h-[153px] overflow-hidden rounded-xl">
              <Image src="/images/Photo5.svg" alt="DSMBC 2024" fill className="object-cover" />
            </div>
            <Image
              src="/images/pattern-2.svg"
              alt="-"
              width={33}
              height={100}
            />
          </div>
          <div className="flex gap-2 items-start justify-center">
            <div className="relative w-[199px] h-[153px] overflow-hidden rounded-xl">
              <Image src="/images/Photo6.svg" alt="DSMBC 2024" fill className="object-cover" />
            </div>
            <div className="relative w-[156px] h-[153px] overflow-hidden rounded-xl">
              <Image src="/images/Photo7.svg" alt="DSMBC 2024" fill className="object-cover" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
