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
        <div className="flex flex-col gap-10 mb-44">
          <div className="flex gap-4 items-center justify-center text-light_blue">
            <hr className="border-light_blue border-1 w-16"/>
            <h1 className="text-center font-semibold text-xl">ABOUT</h1>
            <hr className="border-light_blue border-1 w-16"/>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-slate-700 text-center">
              About <span className="text-orange-500">Data Science</span> Mini <br /> Bootcamp 2025
            </h1>
            <p className="font-medium text-base lg:text-xl text-gray-600 text-center w-[364px] lg:w-[860px] mx-auto">
              <span className="font-bold">Data Science Mini Bootcamp 2025 "Data Detective:</span> Uncovering Truths with Data" is a 3-day intensive program that will give you insights into Data Science and allow you to practice it directly. In this mini bootcamp, you will learn how to use Python and Pandas to process, analyze, and visualize data. You will also learn how to predict data using various machine learning models.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 mb-44">
          <div className="flex gap-4 items-center justify-center text-light_blue">
            <hr className="border-light_blue border-1 w-16"/>
            <h1 className="text-center font-semibold text-xl">TIMELINE</h1>
            <hr className="border-light_blue border-1 w-16"/>
          </div>
        </div>
        <div className="flex flex-col gap-10 mb-44">
          <div className="flex gap-4 items-center justify-center text-light_blue">
            <hr className="border-light_blue border-1 w-16"/>
            <h1 className="text-center font-semibold text-xl">LEARNING PATH</h1>
            <hr className="border-light_blue border-1 w-16"/>
          </div>
          <div className="flex gap-5 justify-center">
            <div className="flex flex-col gap-8 items-center justify-center px-10 py-20 border-[1px] rounded-[32px] w-[400px] h-[496px] bg-neutral-50 border-gray-200">
              <div className="p-5 rounded-full bg-gradient-to-r from-gray-200 to-white">
                <Image
                  src="/images/startup.svg"
                  alt="-"
                  className="justify-center"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col gap-4 items-center justify-center text-center">
                <h1 className="font-medium text-4xl text-slate-700">DAY 1</h1>
                <p className="font-medium text-2xl text-gray-600">The Case Begins</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center justify-center px-10 py-20 border-[1px] rounded-[32px] w-[400px] h-[496px] bg-neutral-50 border-gray-200">
              <div className="p-5 rounded-full bg-gradient-to-r from-gray-200 to-white">
                <Image
                  src="/images/folder-search.svg"
                  alt="-"
                  className="justify-center"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col gap-4 items-center justify-center text-center">
                <h1 className="font-medium text-4xl text-slate-700">DAY 2</h1>
                <p className="font-medium text-2xl text-gray-600">Uncovering Clues in the Data Through Investigation</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center justify-center px-10 py-20 border-[1px] rounded-[32px] w-[400px] h-[496px] bg-neutral-50 border-gray-200">
              <div className="p-5 rounded-full bg-gradient-to-r from-gray-200 to-white">
                <Image
                  src="/images/puzzle-piece.svg"
                  alt="-"
                  className="justify-center"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col gap-4 items-center justify-center text-center">
                <h1 className="font-medium text-4xl text-slate-700">DAY 3</h1>
                <p className="font-medium text-2xl text-gray-600">Solving the Mystery by Making Predictions with Data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
