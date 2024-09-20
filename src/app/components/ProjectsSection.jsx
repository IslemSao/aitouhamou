"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Celas School Management App",
    description: "An Android app for managing two schools, supporting Admin, Teacher, Student, and Super Admin roles. Features include managing teachers, students, schedules, attendance, and payments, with multilingual support and resource sharing for teachers.",
    image: "/images/projects/1.png",
    projectLink: "https://www.linkedin.com/feed/update/urn:li:activity:7241833473252933634?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7241833473252933634%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
  },
  {
    id: 2,
    title: "Bilanciai Algeria App",
    description: "A company management app built with Flutter to track clients and manage tasks like issues, modifications, and maintenance. The app integrates Google Maps for location tracking and allows efficient work planning with workers.",
    image: "/images/projects/2.png",
    projectLink: "#",
  },
  {
    id: 3,
    title: "Smart Card Security Project",
    description: "A university security project led by me as part of a team of six over five months. We secured a client-server communication channel using smart cards and Java Card technology. The project included a desktop app for companies that used the smart card for secure access. Supervised by three mentors, including a researcher.",
    image: "/images/projects/3.jpg",
    projectLink: "https://www.linkedin.com/feed/update/urn:li:activity:7207368352372011009?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7207368352372011009%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
      <section id="projects">
        {/*//green color*/}
        <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12 text-[#3DDC84] ">
          Lastest 3 Projects
        </h2>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
              <motion.li
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    projectLink={project.projectLink}
                />
              </motion.li>
          ))}
        </ul>
      </section>
  );
};

export default ProjectsSection;