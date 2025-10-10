"use client";

import { motion } from "framer-motion";
import { Label } from "../Label";
import { withBasePath } from "@/shared/utils/imagePath";

const timelineData = [
  { date: "11 - 17 October 2025", title: "Open Registration", type: "start" },
  { date: "18 October 2025", title: "Day 0" },
  { date: "22 October 2025", title: "Day 1" },
  { date: "24 October 2025", title: "Day 2" },
  { date: "24 - 31 October 2025", title: "Kaggle Competition" },
  { date: "2 November 2025", title: "Awarding KaggleWar🏆", type: "end" },
];

export default function Timeline() {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:mx-8">
      <div className="font-WorkSans text-xl absolute left-4 top-16 bottom-20 h-[470px] lg:h-[540px] w-[3px] bg-orange-500 lg:left-1/2 lg:-translate-x-1/2" />

      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-3xl py-4 lg:py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex lg:hidden w-full">
            <div className="relative flex items-start justify-center mr-10 mt-1">
              <div className="bg-white p-[6px] rounded-full z-10">
                <div
                  className={`bg-orange-500 ${
                    item.type === "start" || item.type === "end"
                      ? "rotate-45 w-6 h-6"
                      : "rounded-full w-6 h-6"
                  }`}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <Label
                text={item.date}
                className={`text-sm text-white mb-1 ${
                  item.type === "start"
                    ? `bg-[url(${withBasePath("/images/bg-chip.svg")})]`
                    : "bg-light_blue"
                }`}
              />
              <div className="font-medium text-gray-700 text-base">
                {item.title}
              </div>
            </div>
          </div>

          {index % 2 === 0 ? (
            <div className="hidden lg:flex w-1/2 justify-end pr-6">
              <Label
                text={item.date}
                className={`text-xl text-center w-fit text-white ${
                  item.type === "start"
                    ? `bg-[url(${withBasePath("/images/bg-chip.svg")})]`
                    : "bg-light_blue"
                }`}
              />
            </div>
          ) : (
            <div className="hidden lg:block w-1/2 text-right pr-6 font-medium text-xl text-gray-600">
              {item.title}
            </div>
          )}

          <div className="hidden lg:flex relative items-center justify-center mx-10">
            <div className="bg-white p-[6px] rounded-full z-10">
              <div
                className={`bg-orange-500 ${
                  item.type === "start" || item.type === "end"
                    ? "rotate-45 w-4 h-4"
                    : "rounded-full w-6 h-6"
                }`}
              />
            </div>
          </div>

          {index % 2 === 0 ? (
            <div className="hidden lg:block w-1/2 text-left pl-6 font-medium text-xl text-gray-600">
              {item.title}
            </div>
          ) : (
            <div className="hidden lg:flex w-1/2 justify-start pl-6">
              <Label
                text={item.date}
                className={`text-xl text-center w-fit text-white ${
                  item.type === "start"
                    ? `bg-[url(${withBasePath("/images/bg-chip.svg")})]`
                    : "bg-light_blue"
                }`}
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}