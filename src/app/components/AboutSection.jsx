"use client";
import React from "react";

const technologies = [
  { name: "Kotlin", icon: "/images/kotlin.png" },
  { name: "Java", icon: "/images/java.png" },
  { name: "Flutter", icon: "/images/flutter.png" },
  { name: "JavaCard", icon: "/images/javacard.png" },
  { name: "React", icon: "/images/react.png" },
];

const AboutSection = () => {
  return (
      <section className="text-[#CFD8DC]" id="about">
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold text-center text-[#3DDC84] mb-8">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8 text-center">
              I'm a passionate mobile developer with a focus on Android and Flutter. Starting my coding journey at just 13, I began as a front-end developer, gaining experience in various languages like C, C#, Java, and JavaCard. Over the past two years, I’ve honed my skills in Android development using Kotlin and Jetpack Compose, as well as building cross-platform apps with Flutter.

              I thrive in leveraging AI for problem-solving and prompt engineering, making workflows more efficient. As a team leader in a five-month project with six members, I’ve developed strong leadership and collaboration skills, delivering high-quality mobile applications.
            </p>

            {/* Flexbox Layout for Technology Cards */}
            <div className="flex flex-wrap justify-center gap-6">
              {technologies.map((tech) => (
                  <div
                      key={tech.name}
                      className="flex flex-col items-center bg-[#263238] p-6 rounded-lg shadow-lg hover:animation-up-down w-48 h-64"
                  >
                    {/* Fixed Size for Tech Icon */}
                    <div className="w-32 h-32 mb-4 flex justify-center items-center overflow-hidden">
                      <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Bigger Font with Consistent Padding */}
                    <p className="text-lg text-center text-[#3DDC84] font-semibold mt-auto">
                      {tech.name}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutSection;
