"use client";

import Navbar from "@/shared/components/NavBar/index";
import Footer from "@/shared/components/Footer/index";
import Image from "next/image";
import Button from "@/shared/components/Button";
import CountdownSection from "@/shared/components/Countdown";
import { BiCalendar, BiTime } from "react-icons/bi";
import { label } from "@/shared/components/Label/index";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="px-24 py-40">
        <div className="flex mb-44 w-full">
          <div className="flex gap-16">
            <Image
              src="/images/Photo1.svg"
              alt="DSMBC 2025"
              className="justify-left"
              width={505}
              height={464}
              />
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  {label({ text: "Data Science" })}
                  <h1 className="font-semibold text-5xl text-slate-700">Data Science Mini Bootcamp 2025</h1>
                  <h2 className="font-medium text-2xl text-slate-700">"Data Detective: Uncovering Truths with Data"</h2>
                </div>
                <p className="font-medium text-xl text-gray-600">Explore the world of Data Science and learn the steps to process, analyze, and predict from data. In these 3 days, you will experience firsthand how data can be transformed into real insights and solutions.</p>
                <Button variant="secondary" className="w-36 h-12">
                  Get Started
                </Button>
              </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 mb-44">
          <div className="flex gap-4 items-center justify-center text-light_blue">
            <hr className="border-light_blue border-1 w-16"/>
            <h1 className="text-center font-semibold text-xl">COUNTDOWN</h1>
            <hr className="border-light_blue border-1 w-16"/>
          </div>
          <div className="flex flex-col gap-10">
            <CountdownSection 
              closeRegistration={new Date("2025-10-19T00:00:00")}
              onComplete={() => {}}
            />
            <div className="flex gap-4 items-center justify-center text-gray-400 font-semibold text-sm">
              <div className="flex gap-1 items-center">
                <BiCalendar size={24} />
                <p>19 OKTOBER 2025</p>
              </div>
              <div className="flex gap-1 items-center">
                <BiTime size={24}/>
                <p>TIMELEFT</p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="primary" className="h-12">
                Download Guidelines
              </Button>
              <Button variant="secondary" className="h-12">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
