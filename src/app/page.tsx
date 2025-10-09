"use client";

import Navbar from "@/shared/components/NavBar/index";
import Footer from "@/shared/components/Footer/index";
import Image from "next/image";
import Button from "@/shared/components/Button";
import CountdownSection from "@/shared/components/Countdown";
import { BiCalendar, BiTime } from "react-icons/bi";
import { Label } from "@/shared/components/Label/index";
import AccordionFaq from "@/shared/components/faq";
import Timeline from "@/shared/components/Timeline";
import BackgroundDecorations from "@/shared/components/Background";
import { Gallery } from "@/shared/components/Gallery";
import BenefitSection from "@/shared/components/Benefits";

export default function AboutPage() {
  const handleClickRegister = () => {
    window.open("https://bccfilkom.ub.ac.id/event/01K6FT36RTF1GXARMB7S06AZN1?type=workshop", "_blank");
    setTimeout(() => {
      return;
    }, 1000);
  }
  
  const handleClickDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/Guidebook DSMBC 2025.pdf";
    link.download = "Guidebook DSMBC 2025.pdf";
    link.click();
  };

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar />
      <div className="px-6 pt-28 md:px-24 md:pt-40">
        <div className="flex w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <Image
              src="/images/Photo1.svg"
              alt="DSMBC 2025"
              className="text-center mx-auto items-center lg:justify-left lg:w-[505px] md:h-[464px]"
              width={364}
              height={334}
              />
              <div className="flex flex-col gap-5 lg:gap-10">
                <div className="flex flex-col gap-3">
                  <Label text="Data Science" className="bg-orange-500 bg-opacity-20 text-orange-500 text-xs lg:text-sm"/>
                  <h1 className="font-semibold text-3xl lg:text-5xl text-slate-700">Data Science Mini Bootcamp 2025</h1>
                  <h2 className="font-medium text-xl lg:text-2xl text-slate-700">&quot;Data Detective: Uncovering Truths with Data&quot;</h2>
                </div>
                <p className="font-medium text-base lg:text-xl text-gray-600">Explore the world of Data Science and learn the steps to process, analyze, and predict from data. In these 3 days, you will experience firsthand how data can be transformed into real insights and solutions.</p>
                <Button variant="secondary" className="w-36 h-12" onClick={() => handleClickScroll("countdown")}>
                  Get Started
                </Button>
              </div>
          </div>
        </div>
        <div id="countdown" className="flex flex-col gap-8 lg:gap-10 py-28 lg:py-44">
          <div className="flex gap-4 items-center justify-center text-light_blue">
            <hr className="border-light_blue border-1 w-16"/>
            <h1 className="text-center font-semibold text-base lg:text-xl">COUNTDOWN</h1>
            <hr className="border-light_blue border-1 w-16"/>
          </div>
          <div className="flex flex-col gap-6 lg:gap-10">
            <CountdownSection 
              closeRegistration={new Date("2025-10-18T00:00:00")}
              onComplete={() => {}}
            />
            <div className="flex gap-4 items-center justify-center text-gray-400 font-semibold text-sm">
              <div className="flex gap-1 items-center">
                <BiCalendar size={24} />
                <p>18 OKTOBER 2025</p>
              </div>
              <div className="flex gap-1 items-center">
                <BiTime size={24}/>
                <p>TIMELEFT</p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="primary" className="h-12" onClick={handleClickDownload}>
                Download Guidelines
              </Button>
              <Button variant="secondary" className="h-12" onClick={handleClickRegister}>
                Register Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:gap-10 mb-28 lg:mb-44">
          <div className="flex gap-4 items-center justify-center text-light_blue">
            <hr className="border-light_blue border-1 w-16"/>
            <h1 className="text-center font-semibold text-base lg:text-xl">ABOUT</h1>
            <hr className="border-light_blue border-1 w-16"/>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="font-semibold text-2xl lg:text-4xl text-slate-700 text-center">
              About <span className="text-orange-500">Data Science</span> Mini <br /> Bootcamp 2025
            </h1>
            <p className="font-medium text-base lg:text-xl text-gray-600 text-center mx-auto lg:mx-64">
              <span className="font-bold">Data Science Mini Bootcamp 2025 &quot;Data Detective:</span> Uncovering Truths with Data&quot; is a 3-day intensive program that will give you insights into Data Science and allow you to practice it directly. In this mini bootcamp, you will learn how to use Python and Pandas to process, analyze, and visualize data. You will also learn how to predict data using various machine learning models.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:gap-10 mb-28 lg:mb-44">
          <div className="flex gap-4 items-center justify-center text-light_blue">
            <hr className="border-light_blue border-1 w-16"/>
            <h1 className="text-center font-semibold text-base lg:text-xl">TIMELINE</h1>
            <hr className="border-light_blue border-1 w-16"/>
          </div>
          <Timeline/>
        </div>
        <div className="flex flex-col gap-8 lg:gap-10 mb-28 lg:mb-44">
          <div className="flex gap-4 items-center justify-center text-light_blue">
            <hr className="border-light_blue border-1 w-16"/>
            <h1 className="text-center font-semibold text-base lg:text-xl">LEARNING PATH</h1>
            <hr className="border-light_blue border-1 w-16"/>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 md:gap-3 lg:gap-5 justify-center">
            <div className="flex lg:flex-col gap-6 lg:gap-8 items-center p-6 lg:px-10 lg:py-20 border-[1px] rounded-xl lg:rounded-[32px] w-full h-[105px] lg:w-[400px] lg:h-[496px] bg-neutral-50 border-gray-200">
              <div className="p-5 rounded-full bg-gradient-to-r from-gray-200 to-white">
                <Image
                  src="/images/startup.svg"
                  alt="-"
                  className="justify-center lg:w-12 lg:h-12"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-1 lg:gap-4 items-start lg:items-center justify-start lg:justify-center text-left lg:text-center">
                <h1 className="font-medium text-xl lg:text-4xl text-slate-700">DAY 0</h1>
                <p className="font-medium text-sm lg:text-2xl text-gray-600">The Case Begins</p>
              </div>
            </div>
            <div className="flex lg:flex-col gap-6 lg:gap-8 items-center p-6 lg:px-10 lg:py-20 border-[1px] rounded-xl lg:rounded-[32px] w-full h-[105px] lg:w-[400px] lg:h-[496px] bg-neutral-50 border-gray-200">
              <div className="p-5 rounded-full bg-gradient-to-r from-gray-200 to-white">
                <Image
                  src="/images/folder-search.svg"
                  alt="-"
                  className="justify-center lg:w-12 lg:h-12"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-1 lg:gap-4 items-start lg:items-center justify-start lg:justify-center text-left lg:text-center">
                <h1 className="font-medium text-xl lg:text-4xl text-slate-700">DAY 1</h1>
                <p className="font-medium text-sm lg:text-2xl text-gray-600">Uncovering Clues in the Data Through Investigation</p>
              </div>
            </div>
            <div className="flex lg:flex-col gap-6 lg:gap-8 items-center p-6 lg:px-10 lg:py-20 border-[1px] rounded-xl lg:rounded-[32px] w-full h-[105px] lg:w-[400px] lg:h-[496px] bg-neutral-50 border-gray-200">
              <div className="p-5 rounded-full bg-gradient-to-r from-gray-200 to-white">
                <Image
                  src="/images/puzzle-piece.svg"
                  alt="-"
                  className="justify-center lg:w-12 lg:h-12"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-1 lg:gap-4 items-start lg:items-center justify-start lg:justify-center text-left lg:text-center">
                <h1 className="font-medium text-xl lg:text-4xl text-slate-700">DAY 2</h1>
                <p className="font-medium text-sm lg:text-2xl text-gray-600">Solving the Mystery by Making Predictions with Data</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:gap-10 mb-28 lg:mb-44">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-8 lg:gap-10 justify-left">
              <div className="flex gap-4 items-center justify-left text-light_blue">
                <h1 className="text-center font-semibold text-base lg:text-xl">Benefit</h1>
                <hr className="border-light_blue border-1 w-16"/>
              </div>
              <h1 className="text-left font-semibold text-2xl lg:text-4xl text-slate-700">
                <span className="text-orange-500">Benefits</span>  You<br /> Will Get</h1>
            </div>
            <Image
              src="/images/pattern-1.svg"
              alt="-"
              className="justify-end items-end lg:w-[85px] lg:h-[143px]"
              width={57}
              height={114}
            />
          </div>
          <BenefitSection/>
        </div>
        <div className="flex flex-col gap-8 lg:gap-10 mb-28 lg:mb-44">
          <div className="flex gap-4 items-center justify-end text-light_blue">
            <hr className="border-light_blue border-1 w-16"/>
            <h1 className="text-center font-semibold text-base lg:text-xl">DSMBC Gallery</h1>
          </div>
          <h1 className="text-right font-semibold text-2xl lg:text-4xl text-slate-700">
            Last Year&apos;s <br /><span className="text-orange-500">DSMBC</span>
          </h1>
          <Gallery></Gallery>
        </div>
      </div>
      <div className="flex max-w-screen mb-28 lg:mb-44 px-6 py-10 lg:px-48 lg:py-20 relative bg-gradient-to-b from-[#143045] to-[#183F5C]">
          <Image
            src="/images/bg-1.svg"
            alt=""
            className="absolute left-0 bottom-0 opacity-80 hidden lg:block"
            width={1440}
            height={1440}
          />

          <div className="flex flex-col justify-center items-center z-10">
            <Image
              src="/images/mask-group.svg"
              alt="DSMBC 2025"
              className="justify-center lg:h-40 lg:w-40 mb-10 lg:mb-14"
              width={80}
              height={80}
            />
            <h1 className="text-center font-semibold text-2xl lg:text-5xl text-neutral-50 mb-3">A Rare, Once-a-Year Opportunity!</h1>
            <p className="font-medium text-base mx-6 lg:mx-52 lg:text-2xl text-neutral-50 text-center mb-10">
              Learn Data Science, try AI Models, and join a data competition all in one intensive bootcamp from <span className="font-bold">FILKOM BCC UB</span>
            </p>
            <Label text="Limited Quota, Register Now!" className="bg-error-10 text-error-primary bg-opacity-100 text-sm"/>
            <Button variant="secondary" className="mt-10" onClick={handleClickRegister}>Register Now →</Button>
          </div>
      </div>
      <div className="px-6 md:px-24">
        <div className="flex flex-col gap-20 mb-44">
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex gap-4 items-center justify-center text-light_blue">
              <hr className="border-light_blue border-1 w-16"/>
              <h1 className="text-center font-semibold text-base lg:text-xl">FAQ&apos;S</h1>
              <hr className="border-light_blue border-1 w-16"/>
            </div>
            <h1 className="text-center font-semibold text-2xl lg:text-4xl text-slate-700">Have <span className="text-orange-500">questions?</span> We&apos;re here to help</h1>
          </div>
          <div className="justify-center mx-auto">
            <AccordionFaq />
          </div>
        </div>
      </div>
      <BackgroundDecorations />
      <Footer />
    </>
  );
}