"use client";

import { motion } from "framer-motion";
import { Label } from "../Label";

const timelineData = [
  { date: "xx - xx October 2025", title: "Open Registration", type: "start" },
  { date: "19 October 2025", title: "Day 1" },
  { date: "22 October 2025", title: "Day 2" },
  { date: "24 October 2025", title: "Day 3" },
  { date: "xx October 2025", title: "Kaggle Competition" },
  { date: "xx October 2025", title: "Awarding 🏆", type: "end" },
];

export default function Timeline() {
  return (
    <div className="relative flex flex-col items-center py-10">
      <div className="font-WorkSans text-xl absolute left-1/2 top-0 h-full w-[3px] bg-orange-500 -translate-x-1/2" />

      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className="relative flex items-center justify-between w-full max-w-3xl py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {index % 2 === 0 ? (
            <>
              <div className="w-1/2 justify-end flex pr-6">
                <Label text={item.date} className={`text-xl text-center w-fit text-white ${item.type == "start" ? `bg-[url('/images/bg-chip.svg')]` : "bg-light_blue"}`}/>
              </div>
              <div className="relative flex items-center justify-center mx-10">
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
              <div className="w-1/2 text-left pl-6 font-medium text-xl text-gray-600">
                {item.title}
              </div>
            </>
          ) : (
            <>
              <div className="w-1/2 text-right pl-6 font-medium text-xl text-gray-600">
                {item.title}
              </div>
              <div className="relative flex items-center justify-center mx-10">
                <div className="bg-white p-[6px] rounded-full z-10">
                  <div
                    className={` bg-orange-500 ${
                      item.type === "start" || item.type === "end"
                        ? "rotate-45 w-4 h-4"
                        : "rounded-full w-6 h-6"
                    }`}
                  />
                </div>
              </div>
              <div className="w-1/2 justify-start flex pl-6">
                <Label text={item.date} className={`text-xl text-center w-fit text-white ${item.type == "start" ? "bg-orange-500" : "bg-light_blue"}`}/>
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
}