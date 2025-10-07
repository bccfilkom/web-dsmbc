"use client";

import type { CountdownProps } from "react-countdown";
import dynamic from "next/dynamic";

const Countdown = dynamic<CountdownProps>(
  () =>
    import("react-countdown").then(
      (mod) => mod.default as unknown as React.ComponentType<CountdownProps>
    ),
  { ssr: false }
);

const Renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    return (
      <>
        <span className="flex gap-10 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-gray-600 text-clip">
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex w-52 h-52 border-4 border-orange-500 rounded-[32px] items-center justify-center text-center">
                    0
                </div>
                <div className="font-semibold text-sm">
                    HOURS
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex w-52 h-52 border-4 border-orange-500 rounded-[32px] items-center justify-center text-center">
                    0 
                </div>
                <div className="font-semibold text-sm">
                    MINUTES
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex w-52 h-52 border-4 border-orange-500 rounded-[32px] items-center justify-center text-center">
                    0 
                </div>
                <div className="font-semibold text-sm">
                    SECONDS
                </div>
            </div>
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="flex gap-10 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-700 text-clip">
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex w-52 h-52 border-4 border-orange-500 rounded-[32px] items-center justify-center text-center">
                    {String(hours + days * 24).padStart(3, "0")}
                </div>
                <div className="font-semibold text-sm">
                    HOURS
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex w-52 h-52 border-4 border-orange-500 rounded-[32px] items-center justify-center text-center">
                    {String(minutes).padStart(2, "0")} 
                </div>
                <div className="font-semibold text-sm">
                    MINUTES
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex w-52 h-52 border-4 border-orange-500 rounded-[32px] items-center justify-center text-center">
                    {String(seconds).padStart(2, "0")} 
                </div>
                <div className="font-semibold text-sm">
                    SECONDS
                </div>
            </div>
        </span>
      </>
    );
  }
}

const CountdownSection = ({
  closeRegistration,
  onComplete,
}: {
  closeRegistration: Date;
  onComplete: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full flex flex-col items-center">
        <Countdown
          date={closeRegistration}
          renderer={Renderer}
          onComplete={onComplete}
        />
      </div>
    </div>
  )
}

export default CountdownSection;