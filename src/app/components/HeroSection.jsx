"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DDC84] to-[#0A8F08]">
                            Hi, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "AIT OUHAMOU Samy Islem",
                                1000,
                                "Mobile Developer",
                                1000,
                                "Android Specialist",
                                1000,
                                "Flutter Enthusiast",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#CFD8DC] text-base sm:text-lg mb-6 lg:text-xl">
                        3rd-year CS student passionate about creating innovative mobile applications.
                        Specializing in Android development with Kotlin and cross-platform solutions with Flutter.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-gradient-to-br from-[#263238] to-[#212121] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative flex items-center justify-center shadow-lg">
                        <div className="rounded-full border-4 border-white w-[220px] h-[220px] lg:w-[270px] lg:h-[270px] overflow-hidden">
                            <Image
                                src="/images/hero-image.png"
                                alt="Profile image"
                                className="object-cover w-full h-full"
                                width={270}
                                height={270}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
