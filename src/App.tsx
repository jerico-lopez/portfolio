import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import DarkVeil from "./components/DarkVeil";
import FlareLine from "./components/FlareLine";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import ScrollFadeUp from "./components/ScrollFadeUp";
import SocialBubbles from "./components/SocialBubbles";
import TextType from "./components/TextType";

import { useEffect, useState } from "react";

//Icons
import {
  FaBootstrap,
  FaCheck,
  FaCss3,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHome,
  FaHtml5,
  FaInstagram,
  FaJava,
  FaJs,
  FaLaravel,
  FaLinkedinIn,
  FaPhone,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp, TbBrandVite } from "react-icons/tb";
import {
  DiGit,
  DiUbuntu,
  DiCodeigniter,
  DiMysql,
  DiPostgresql,
  DiMongodb,
  DiLinux,
  DiWindows,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { CometCard } from "./components/CometCard";
import { FaC, FaDartLang, FaFlutter } from "react-icons/fa6";
import { SiBlender, SiFlask } from "react-icons/si";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    href: "https://facebook.com/jrico.lopz",
    label: "Facebook",
  },
  {
    icon: <FaInstagram />,
    href: "https://https://www.instagram.com/jrcolopez/",
    label: "Instagram",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/jerico-lopez",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com/in/jerico-lopez/",
    label: "LinkedIn",
  },
];

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0"
        }`}
      >
        <Loader />
      </div>
      <div>
        <div className="w-full h-screen fixed -z-10">
          <DarkVeil />
        </div>
        <Nav links={navLinks} />

        <div
          id="home"
          className="h-screen w-full flex flex-wrap justify-evenly items-end md:items-center relative"
        >
          <div className="flex justify-center items-center md:items-start flex-col gap-1 md:gap-3 p-3">
            <ScrollFadeUp>
              <p
                id="text-scroll"
                className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text inline-block"
              >
                Jerico Lopez
              </p>
            </ScrollFadeUp>
            <TextType
              text={["Web Developer", "Programmer", "Tech Enthusiast"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              className="text-xl md:text-2xl text-gray-300"
            />
            <SocialBubbles links={socialLinks} />
            <p className="text-gray-300 text-lg max-w-xl text-center md:text-left">
              Aspiring programmer with a passion for coding and problem-solving,
              seeking opportunities to apply technical skills and contribute to
              innovative software development.
            </p>
          </div>
          <div className="w-64 sm:w-80 md:w-96 lg:w-[28rem] self-end">
            <img
              src="./img/profile.png"
              alt="Profile"
              className="w-full object-contain select-none"
            />
          </div>
        </div>

        <div id="about" className="w-full backdrop-blur-2xl">
          <FlareLine />
          <ScrollFadeUp>
            <div className="py-10">
              <div className="flex justify-center">
                <p
                  id="text-scroll"
                  className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text inline-block"
                >
                  About Me
                </p>
              </div>
              <div className="flex flex-wrap justify-evenly items-center gap-3">
                <CometCard>
                  <div className="w-50 md:w-80 rounded-2xl p-1 bg-gradient-to-br from-cyan-500 to-blue-500">
                    <img
                      src="./img/about.JPG"
                      alt="Profile"
                      className="w-full object-contain select-none rounded-2xl"
                    />
                  </div>
                </CometCard>
                <div>
                  <p className="text-gray-300 text-lg max-w-3xl text-center md:text-left px-4">
                    Hi, I'm Jerico Lopez, a graduate with a{" "}
                    <span className="text-cyan-500">
                      Bachelor of Science in Information Technology
                    </span>{" "}
                    from{" "}
                    <a
                      className="text-cyan-500 hover:text-blue-500"
                      href="https://filamer.edu.ph/"
                    >
                      Filamer Christian University, Inc.
                    </a>
                    , with a strong passion for web development and programming.
                    I currently live in Capiz, Philippines. <br /> <br /> I've
                    always been fascinated by how technology works, and ever
                    since I started learning to code, I knew I wanted to become
                    a programmer. Solving bugs, building real-world
                    applications, and exploring new technologies keep me
                    motivated. One of my recent projects was a Library
                    Management System that integrates RFID for automated patron
                    logging, which deepened my interest in developing practical
                    and efficient systems. <br /> <br /> While I'm highly
                    dedicated to coding, I also make time for rest. As one
                    programmer said, “Don’t forget to touch some grass,” so I
                    make sure to step away and recharge. I enjoy gaming,
                    swimming, and going on long rides during my free time.{" "}
                    <br /> <br /> I'm open to relocation or working in any
                    assigned location. I am excited to contribute to a team
                    where I can continue growing as a developer and make a
                    meaningful impact.
                  </p>
                </div>
              </div>
            </div>
          </ScrollFadeUp>
          <FlareLine />
        </div>

        <div id="skills" className="p-5 md:p-10">
          <ScrollFadeUp>
            <p className="text-5xl font-extrabold text-transparent self-center md:self-start bg-gradient-to-r from-cyan-500 to-teal-500 inline-block bg-clip-text">
              Skills
            </p>
          </ScrollFadeUp>
          <div className="flex flex-col gap-5 justify-center items-center">
            <ScrollFadeUp>
              <div className="p-5 rounded-lg">
                <p className="text-gray-300 text-4xl font-semibold text-center">
                  Languages
                </p>
                <div className="mt-10 pb-10 grid grid-cols-2 md:grid-cols-6 gap-10 items-center">
                  <FaHtml5 className="w-full h-20 object-contain select-none text-orange-600" />
                  <FaCss3 className="w-full h-20 object-contain select-none text-blue-600" />
                  <FaDartLang className="w-full h-15 object-contain select-none text-sky-600" />
                  <FaJs className="w-full h-20 object-contain select-none text-yellow-600" />
                  <FaPython className="w-full h-20 object-contain select-none text-yellow-600" />
                  <FaJava className="w-full h-20 object-contain select-none text-blue-600" />
                  <TbBrandCSharp className="w-full h-20 object-contain select-none text-violet-600" />
                  <FaC className="w-full h-15 object-contain select-none text-blue-600" />
                </div>
              </div>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <div className="p-5 rounded-lg">
                <p className="text-gray-300 text-4xl font-semibold text-center">
                  Frameworks
                </p>
                <div className="mt-10 pb-10 grid grid-cols-2 md:grid-cols-6 gap-10 items-center">
                  <FaBootstrap className="w-full h-20 object-contain select-none text-violet-600" />
                  <DiCodeigniter className="w-full h-15 object-contain select-none text-red-600" />
                  <SiFlask className="w-full h-20 object-contain select-none text-cyan-600" />
                  <FaLaravel className="w-full h-15 object-contain select-none text-red-600" />
                  <FaReact className="w-full h-20 object-contain select-none text-blue-600" />
                  <RiTailwindCssFill className="w-full h-20 object-contain select-none text-cyan-600" />
                  <TbBrandVite className="w-full h-20 object-contain select-none text-yellow-600" />
                  <FaVuejs className="w-full h-20 object-contain select-none text-green-600" />
                  <FaFlutter className="w-full h-15 object-contain select-none text-blue-600" />
                </div>
              </div>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <div className="p-5 rounded-lg">
                <p className="text-gray-300 text-4xl font-semibold text-center">
                  Databases
                </p>
                <div className="mt-10 pb-10 grid grid-cols-2 md:grid-cols-6 gap-10">
                  <DiMysql className="w-full h-20 object-contain select-none text-blue-600" />
                  <DiPostgresql className="w-full h-20 object-contain select-none text-blue-600" />
                  <DiMongodb className="w-full h-20 object-contain select-none text-green-600" />
                </div>
              </div>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <div className="p-5 rounded-lg">
                <p className="text-gray-300 text-4xl font-semibold text-center">
                  Tools
                </p>
                <div className="mt-10 pb-10 grid grid-cols-2 md:grid-cols-6 gap-10">
                  <VscVscode className="w-full h-20 object-contain select-none text-blue-600" />
                  <DiGit className="w-full h-20 object-contain select-none text-orange-600" />
                  <DiPhotoshop className="w-full h-20 object-contain select-none text-blue-600" />
                  <DiIllustrator className="w-full h-20 object-contain select-none text-orange-600" />
                  <SiBlender className="w-full h-20 object-contain select-none text-yellow-600" />
                </div>
              </div>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <div className="p-5 rounded-lg">
                <p className="text-gray-300 text-4xl font-semibold text-center">
                  Operating Systems
                </p>
                <div className="mt-10 pb-10 grid grid-cols-2 md:grid-cols-6 gap-10">
                  <DiLinux className="w-full h-20 object-contain select-none text-blue-600" />
                  <DiUbuntu className="w-full h-20 object-contain select-none text-orange-500" />
                  <DiWindows className="w-full h-20 object-contain select-none text-blue-600" />
                </div>
              </div>
            </ScrollFadeUp>
            <ScrollFadeUp>
              <div className="p-5 rounded-lg">
                <p className="text-gray-300 text-4xl font-semibold text-center">
                  IT Support
                </p>
                <div className="mt-10 pb-10 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3">
                    <FaCheck className="w-5 h-5 shrink-0 object-contain select-none text-cyan-600" />
                    <p className="text-gray-300 text-lg">
                      Basic Command-Line Usage
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="w-5 h-5 shrink-0 object-contain select-none text-cyan-600" />
                    <p className="text-gray-300 text-lg">
                      Basic Cybersecurity Practices
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="w-5 h-5 shrink-0 object-contain select-none text-cyan-600" />
                    <p className="text-gray-300 text-lg">Basic Networking</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="w-5 h-5 shrink-0 object-contain select-none text-cyan-600" />
                    <p className="text-gray-300 text-lg">Data Management</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="w-5 h-5 shrink-0 object-contain select-none text-cyan-600" />
                    <p className="text-gray-300 text-lg">
                      Hardware Maintenance & Troubleshooting
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="w-5 h-5 shrink-0 object-contain select-none text-cyan-600" />
                    <p className="text-gray-300 text-lg">
                      Peripheral Setup & Troubleshooting
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="w-5 h-5 shrink-0 object-contain select-none text-cyan-600" />
                    <p className="text-gray-300 text-lg">System Optimization</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="w-5 h-5 shrink-0 object-contain select-none text-cyan-600" />
                    <p className="text-gray-300 text-lg">
                      Operating System Installation & Configuration
                    </p>
                  </div>
                </div>
              </div>
            </ScrollFadeUp>
          </div>
        </div>

        <div id="projects" className="p-5 md:p-10">
          <ScrollFadeUp>
            <p className="text-cyan-500 text-5xl text-center md:text-start font-extrabold md:self-start mb-5">
              Projects
            </p>
          </ScrollFadeUp>
          <div className="flex flex-wrap p-5 gap-5 justify-center">
            <Card
              title="FCU RFID Library Management System"
              description="A library management system for FCU using RFID technology."
              image="./img/projects/fculms.png"
              badges={[
                { text: "Laravel", color: "bg-red-500" },
                { text: "HTML", color: "bg-orange-500" },
                { text: "CSS", color: "bg-blue-500" },
                { text: "JavaScript", color: "bg-yellow-500" },
                { text: "Bootstrap", color: "bg-purple-500" },
              ]}
            />

            <Card
              title="Mobile Shopping App"
              description="A mobile application for shopping with a user-friendly interface."
              image="./img/projects/mobileshop.png"
              badges={[
                { text: "Flutter", color: "bg-blue-500" },
                { text: "Dart", color: "bg-green-500" },
              ]}
            />

            <Card
              title="Point of Sale"
              description="A point of sale application."
              image="./img/projects/pos.png"
              badges={[
                { text: "CodeIgniter", color: "bg-red-600" },
                { text: "HTML", color: "bg-orange-500" },
                { text: "CSS", color: "bg-blue-500" },
                { text: "JavaScript", color: "bg-yellow-500" },
                { text: "Bootstrap", color: "bg-violet-500" },
              ]}
            />

            <Card
              title="Point of Sale"
              description="A point of sale application."
              image="./img/projects/pos1.png"
              badges={[
                { text: "Winforms", color: "bg-blue-700" },
                { text: "C#", color: "bg-violet-700" },
              ]}
            />

            <Card
              title="Web Shopping App"
              description="A web-based shopping application."
              image="./img/projects/webshop.png"
              badges={[
                { text: "HTML", color: "bg-orange-500" },
                { text: "CSS", color: "bg-blue-500" },
                { text: "JavaScript", color: "bg-yellow-500" },
              ]}
            />
          </div>
        </div>

        <FlareLine />
        <div id="experience" className="p-5 md:p-10 backdrop-blur-2xl">
          <ScrollFadeUp>
            <p className="mb-5 text-5xl font-extrabold text-transparent self-center md:self-start bg-gradient-to-r from-cyan-500 to-teal-500 inline-block bg-clip-text">
              Experience
            </p>
          </ScrollFadeUp>
          <ScrollFadeUp>
            <div className="flex flex-wrap justify-around p-10">
              <div>
                <img
                  className="w-80"
                  src="./img/experience/dbtc.jpg"
                  alt="DBTC Experience"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-300 text-2xl">
                  Digital Business Training Center
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-gray-300 text-lg">On-the-Job Training</p>
                  <p className="text-gray-300 text-lg">
                    February 2025 - June 2025
                  </p>
                  <p className="text-gray-300 text-lg">
                    Pueblo De Panay Roxas City
                  </p>
                </div>
                <p className="text-gray-400 max-w-3xl text-lg">
                  This experience was more technical and hands-on, involving
                  various python programming tasks and system design activities.
                  We developed console-based applications such as POS systems,
                  ATM simulators, and a clinic appointment reservation system.
                  We also created various system diagrams, including Data Flow
                  Diagrams, Activity Diagrams, Use Case Diagrams, and Flowcharts
                  for several applications like the Barangay Document Request
                  Portal. One of our final outputs was a grade calculator web
                  application built using Flask. In DBTC, I learned various
                  programming concepts and practices such as variables, data
                  types, control structures, functions, object-oriented
                  programming (OOP), the SOLID principles, database handling,
                  and error handling. We also tackled workplace soft skills like
                  handling customer complaints, resolving conflicts, identifying
                  unconscious biases, and understanding diversity, equality, and
                  occupational safety. We were exposed to various tools and
                  technologies, including Python, Flask, SQL, and VS Code.
                </p>
              </div>
            </div>
          </ScrollFadeUp>
        </div>

        <FlareLine />
        <div id="contact" className="p-5 md:p-10 dark:bg-gray-800">
          <p className="text-5xl font-extrabold text-transparent self-center md:self-start bg-gradient-to-r from-cyan-500 to-teal-500 inline-block bg-clip-text">
            Contact Me
          </p>
          <p className="text-gray-300 mb-5">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
          <div className="flex flex-wrap-reverse justify-evenly items-center">
            <div className="flex flex-col gap-3 text-gray-400 text-2xl">
              <div className="flex items-center gap-2">
                <FaPhone /> <p>: +639478053555</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope /> <p>: jericolopez2003@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <FaHome /> <p>: Capiz, Philippines</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
