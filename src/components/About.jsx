import AboutImage from "../assets/aboutMe.jpg";
import React from "react";

const HalfCircleProgress = ({ value, label }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = Math.PI * radius; 
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg
        width="120"
        height="60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="#2d3748"
          strokeWidth={strokeWidth}
          d={`M 10 60 A ${radius} ${radius} 0 0 1 110 60`}
        />
        <path
          fill="none"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          d={`M 10 60 A ${radius} ${radius} 0 0 1 110 60`} 
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="blue" />
            <stop offset="100%" stopColor="green" />
          </linearGradient>
        </defs>
      </svg>
      <p className="mt-4 text-xl font-semibold">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <HalfCircleProgress value={90} label="HTML & CSS" />
              <HalfCircleProgress value={85} label="JavaScript" />
              <HalfCircleProgress value={75} label="NestJs" />
              <HalfCircleProgress value={95} label="React JS" />
              <HalfCircleProgress value={80} label="Node JS" />
              <HalfCircleProgress value={90} label="React Native" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
