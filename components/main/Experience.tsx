import React from "react";
import Image from "next/image";
import exp_1 from "../../public/exp1.svg";
import exp_2 from "../../public/exp2.svg";
import exp_3 from "../../public/exp3.svg";
import exp_4 from "../../public/exp4.svg";

const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    thumbnail: exp_1,
  },
  {
    id: 2,
    title: "Wordpress Deveoper",
    desc: "WordPress developer specializing in e-commerce stores and diverse websites.",
    thumbnail: exp_2,
  },
  {
    id: 3,
    title: "Freelance",
    desc: "Freelancer experienced in WordPress, Salla, and Zid projects.",
    thumbnail: exp_3,
  }
];

const Experience = () => {
  return (
    <div className="  md:pb-1  ">
          <div className="container mx-auto     ">
      <div className="pb-8 text-center relative z-[500] md:pt-0 pt-28">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-bold  ">
        My Work Experience
      </span>
      </div>


      <div className="grid md:grid-cols-2 gap-8 pb-40 md:pb-0">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className="bg-[#1a172f5e] backdrop-blur-md rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 hover:shadow-xl transition-all duration-300 border-2 border-[#8d60d4c5]"
          >
            <Image
              src={card.thumbnail}
              alt={card.title}
              width={64}
              height={64}
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              <p className="text-gray-400 mt-2">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default Experience;