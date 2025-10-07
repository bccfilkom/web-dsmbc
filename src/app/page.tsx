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

export default function AboutPage() {
  const handleClickRegister = () => {
    window.open("https://bccfilkom.ub.ac.id/event/01K6FT36RTF1GXARMB7S06AZN1?type=workshop", "_blank");
    setTimeout(() => {
      return;
    }, 1000);
  }
  
  const handleClickDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/startup.svg";
    link.download = "startup.svg";
    link.click();
  };
  return (
    <>
      <Navbar />
      <div className="px-24 pt-40">
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
                  <Label text="Data Science" className=" bg-orange-500 bg-opacity-20 text-orange-500 text-sm"/>
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
              <Button variant="primary" className="h-12" onClick={handleClickDownload}>
                Download Guidelines
              </Button>
              <Button variant="secondary" className="h-12" onClick={handleClickRegister}>
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
          <Timeline></Timeline>
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
        <div className="flex flex-col gap-10 mb-44">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-10 justify-left">
              <div className="flex gap-4 items-center justify-left text-light_blue">
                <h1 className="text-center font-semibold text-xl">Benefit</h1>
                <hr className="border-light_blue border-1 w-16"/>
              </div>
              <h1 className="text-left font-semibold text-4xl text-slate-700">
                <span className="text-orange-500">Benefits</span>  You<br /> Will Get</h1>
            </div>
            <Image
              src="/images/pattern-1.svg"
              alt="-"
              className="justify-end items-end"
              width={85}
              height={143}
            />
          </div>
          <div className="flex gap-5 justify-center">
            <div className="flex flex-col gap-6 px-7 py-10 rounded-xl w-[295px] h-[330px] bg-light_blue">
              <Image
                src="/images/images-3.svg"
                alt="-"
                className="justify-left"
                width={60}
                height={60}
              />
              <div className="flex flex-col gap-4 text-neutral-50">
                <h1 className="font-semibold text-2xl">Upgrading Your Skills</h1>
                <p className="font-medium text-xl">Enhance your technical & analytical skill abilities</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 px-7 py-10 rounded-xl w-[295px] h-[330px] bg-neutral-50 border-[1px] border-gray-200">
              <Image
                src="/images/images-2.svg"
                alt="-"
                className="justify-left"
                width={60}
                height={60}
              />
              <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-2xl text-slate-700">Exclusive Mentorship</h1>
                <p className="font-medium text-xl text-gray-600">Direct access to experienced professional mentors</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 px-7 py-10 rounded-xl w-[295px] h-[330px] bg-neutral-50 border-[1px] border-gray-200">
              <Image
                src="/images/images-1.svg"
                alt="-"
                className="justify-left"
                width={60}
                height={60}
              />
              <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-2xl text-slate-700">Certificate of Completion</h1>
                <p className="font-medium text-xl text-gray-600">Official Winner Certificate – BCC FILKOM UB Kaggle Competition</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 px-7 py-10 rounded-xl w-[295px] h-[330px] bg-neutral-50 border-[1px] border-gray-200">
              <Image
                src="/images/images-4.svg"
                alt="-"
                className="justify-left"
                width={60}
                height={60}
              />
              <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-2xl text-slate-700">Getting More Networking</h1>
                <p className="font-medium text-xl text-gray-600">Meet peers & professionals in the data science field</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 mb-44">
          <div className="flex gap-4 items-center justify-end text-light_blue">
            <hr className="border-light_blue border-1 w-16"/>
            <h1 className="text-center font-semibold text-xl">DSMBC Gallery</h1>
          </div>
          <h1 className="text-right font-semibold text-4xl text-slate-700">
            Last Year's <br /><span className="text-orange-500">DSMBC</span>
          </h1>
          <div className="flex flex-col gap-5 justify-center">
            <div className="flex gap-5 items-end justify-center">
              <Image
                src="/images/pattern-1.svg"
                alt="-"
                width={85}
                height={143}
              />
              <Image
                src="/images/Photo2.svg"
                alt="DSMBC 2024"
                width={398}
                height={293}
              />
              <Image
                src="/images/Photo3.svg"
                alt="DSMBC 2024"
                width={295}
                height={293}
              />
              <Image
                src="/images/Photo6.svg"
                alt="DSMBC 2024"
                width={398}
                height={293}
              />
            </div>
            <div className="flex gap-5 items-start justify-center">
              <Image
                src="/images/Photo4.svg"
                alt="DSMBC 2024"
                width={295}
                height={293}
              />
              <Image
                src="/images/Photo5.svg"
                alt="DSMBC 2024"
                width={505}
                height={293}
              />
              <Image
                src="/images/Photo7.svg"
                alt="DSMBC 2024"
                width={295}
                height={293}
              />
              <Image
                src="/images/pattern-2.svg"
                alt="-"
                width={85}
                height={193}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-screen-2xl mb-44 px-48 py-20 relative h-max bg-gradient-to-b from-[#143045] to-[#183F5C]">
          <img src="/images/bg-1.svg" alt="" className="absolute left-0 top-0 opacity-80"/>
          <div className="flex flex-col justify-center items-center z-10">
            <Image
              src="/images/mask-group.svg"
              alt="DSMBC 2025"
              className="justify-center mb-14"
              width={160}
              height={160}
            />
            <h1 className="text-center font-semibold text-5xl text-neutral-50 mb-3">A Rare, Once-a-Year Opportunity!</h1>
            <p className="font-medium text-2xl text-neutral-50 text-center mb-10">
              Learn Data Science, try AI Models, and join a data competition all in one intensive bootcamp from <span className="font-bold">FILKOM BCC UB</span>
            </p>
            <Label text="Limited Quota, Register Now!" className="bg-error-10 text-error-primary bg-opacity-100 text-sm"/>
            <Button variant="secondary" className="mt-10" onClick={handleClickRegister}>Register Now →</Button>
          </div>
      </div>
      <div className="px-24">
        <div className="flex flex-col gap-20 mb-44">
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex gap-4 items-center justify-center text-light_blue">
              <hr className="border-light_blue border-1 w-16"/>
              <h1 className="text-center font-semibold text-xl">FAQ'S</h1>
              <hr className="border-light_blue border-1 w-16"/>
            </div>
            <h1 className="text-center font-semibold text-4xl text-slate-700">Have <span className="text-orange-500">questions?</span> We’re here to help</h1>
          </div>
          <div className="justify-center w-[818px] mx-auto">
            <AccordionFaq />
          </div>
        </div>
      </div>
      <img src="/images/bg-2.svg" alt="" className="-z-10 absolute right-0 top-[402px]"/>
      <img src="/images/bg-3.svg" alt="" className="-z-10 absolute left-10 top-[700px]"/>
      <img src="/images/bg-4.svg" alt="" className="-z-10 absolute -left-6 top-[1394px]"/>
      <img src="/images/bg-5.svg" alt="" className="-z-10 absolute right-8 top-[1346px] rotate-45"/>
      <img src="/images/bg-5.svg" alt="" className="-z-10 absolute right-32 top-[1515px]"/>
      <img src="/images/bg-5.svg" alt="" className="-z-10 absolute right-6 top-[1698px] rotate-12"/>
      <img src="/images/bg-6.svg" alt="" className="-z-10 absolute right-0 top-[2270px]"/>
      <img src="/images/bg-7.svg" alt="" className="-z-10 absolute left-72 top-[3264px]"/>
      <img src="/images/bg-8.svg" alt="" className="-z-10 absolute right-0 top-[6130px]"/>
      <Footer />
    </>
  );
}
