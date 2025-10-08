"use client";

const benefits = [
  {
    icon: "/images/image-1.svg",
    title: "Upgrading Your Skills",
    desc: "Enhance your technical & analytical skill abilities",
  },
  {
    icon: "/images/image-2.svg",
    title: "Exclusive Mentorship",
    desc: "Direct access to experienced professional mentors",
  },
  {
    icon: "/images/image-3.svg",
    title: "Certificate of Completion",
    desc: "Official Winner Certificate – BCC FILKOM UB Kaggle Competition",
  },
  {
    icon: "/images/image-4.svg",
    title: "Getting More Networking",
    desc: "Meet peers & professionals in the data science field",
  },
];

export default function BenefitSection() {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-3 justify-center mx-auto">
      {benefits.map((f, i) => (
        <div
          key={i}
          className="group flex flex-col gap-4 lg:gap-6 px-5 lg:px-7 py-6 lg:py-10 rounded-xl w-[146px] h-[246px] lg:w-[290px] lg:h-[330px] bg-neutral-50 border border-gray-200 hover:bg-light_blue hover:border-transparent hover:text-neutral-50 transition"
        >
          <div className="p-2 lg:p-3 w-fit rounded-full bg-light_blue group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:to-white transition">
            <div
              className="w-5 h-5 lg:w-8 lg:h-8 bg-white group-hover:bg-light_blue transition"
              style={{
                WebkitMask: `url(${f.icon}) no-repeat center`,
                mask: `url(${f.icon}) no-repeat center`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
          </div>
          <div className="flex flex-col gap-1 lg:gap-4">
            <h1 className="font-semibold text-base lg:text-2xl text-slate-700 group-hover:text-white transition">
              {f.title}
            </h1>
            <p className="font-medium text-sm lg:text-xl text-gray-600 group-hover:text-white transition">
              {f.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}