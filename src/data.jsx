import { TbTopologyStarRing3 } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { RiAiGenerate2 } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  emailicon,
  messengericon,
  whatsappicon,
  solidityicon,
  ethereumicon,
  web3js,
  remixide,
  nodejs,
  expressjs,
  mongodb,
  emailjs,
  gemini,
  michael,
  narayn,
  kawser,
  jabed,
  ppimsc,
  ulab,
  diu,
  sfbu
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "Blockchain/Web3 Development",
    icon: <TbTopologyStarRing3 />,
    description: `Building secure, decentralized applications that redefine digital ownership and trust.
From smart contract development to full-stack Web3 integration, I focus on creating seamless, efficient, and transparent blockchain solutions that empower users and drive innovation.`,
  },
  {
    title: "Full Stack Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building powerful, scalable, and dynamic web applications with MongoDB, Express.js, React, and Node.js.
From crafting interactive frontends to designing robust backend APIs, I ensure seamless database integration, real-time performance, and a smooth user experience for modern web solutions.`,
  },
  {
    title: "Generative AI Integration",
    icon: <RiAiGenerate2 />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Enhancing applications with intelligent, AI-driven experiences through seamless integration of generative models.
From text generation to voice recognition, I leverage cutting-edge AI frameworks and APIs to create adaptive, interactive, and personalized solutions that redefine user engagement and automation.`,
  },
];

export const projects = [
  {
    title: "QuickMed: AI & Blockchain-Powered Telemedicine Platform",
    image: project1,
    category: "Full Stack, Web3, Gen AI",
    description: `Transforming healthcare accessibility, QuickMed integrates AI-driven triage, secure blockchain-backed video consultations, and seamless data/payment systems for a next-gen telemedicine experience. Designed with role-specific dashboards and crypto payment options, the platform ensures enhanced accessibility, security, and efficiency. Built using React, Node.js, and Solidity, QuickMed delivers a responsive, user-friendly interface, optimizing patient-doctor interactions while maintaining trust and transparency in medical services.`,
    demoLink: "https://quickmed-c483c.web.app/",
    github_client: "https://github.com/Salekin-Nabil/quickmed-client-side",
    github_server: "https://github.com/Salekin-Nabil/quickmed-server-side",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "Node JS",
        logo: nodejs,
      },
      {
        name: "Express JS",
        logo: expressjs,
      },
      {
        name: "MongoDB",
        logo: mongodb,
      },
      {
        name: "Solidity",
        logo: solidityicon,
      },
      {
        name: "Web3 JS",
        logo: web3js,
      },
      {
        name: "Gemini AI",
        logo: gemini,
      },
    ],
  },
  {
    title: "Blockchain-Research",
    image: project2,
    category: "Blockchain: Research and Application (Elsevier)",
    description: `Revolutionize healthcare logistics with our Blockchain-Powered Vaccine Distribution & Verification System. By integrating secure blockchain technology, role-based frameworks, and Ethereum-powered transparency, our platform streamlines vaccination processes, ensuring efficiency and security. With real-time tracking, secure QR verification, and digital vaccine passports, we eliminate inefficiencies and enhance compliance. Experience a seamless, tamper-proof solution that modernizes vaccine distribution and verification, setting new standards in public health security.`,
    demoLink: "https://www.sciencedirect.com/science/article/pii/S2096720922000331?via%3Dihub&fbclid=IwAR2q5CB2X3qNMadN_urNVthC_D6QSTOG8GaRBb5gitTbpPmqtyn0zn5rpT8",
    github_client: "https://github.com/Salekin-Nabil/VaccineChain",
    github_server: "https://github.com/Salekin-Nabil/VaccineChain",
    stacks: [
      {
        name: "Solidity",
        logo: solidityicon,
      },
      {
        name: "Ethereum",
        logo: ethereumicon,
      },
      {
        name: "Web3 JS",
        logo: web3js,
      },
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Wrench Station: Smart Vehicle Repair Management Platform",
    image: project3,
    category: "Full Stack Web",
    description: `Wrench Station revolutionizes vehicle repair service management with a streamlined order system, secure payments, and intuitive dashboards for both customers and administrators. Featuring Stripe-powered transactions, real-time service tracking, and an optimized responsive UI built with React, Tailwind CSS, and React Leaflet, the platform ensures a seamless user experience. Developed with React, Node.js, Express, MongoDB, and Firebase, Wrench Station delivers scalability, efficiency, and reliability, transforming how vehicle repairs are scheduled, managed, and completed.`,
    demoLink: "https://wrench-station.web.app/",
    github_client: "https://github.com/Salekin-Nabil/wrench-station-client-side",
    github_server: "https://github.com/Salekin-Nabil/wrench-station-server-side",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "Node JS",
        logo: nodejs,
      },
      {
        name: "Express JS",
        logo: expressjs,
      },
      {
        name: "MongoDB",
        logo: mongodb,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Gymniac: Smart Gym Equipment Management Platform",
    image: project4,
    category: "Full Stack Web",
    description: `Gymniac streamlines gym equipment management with an intuitive order system, real-time tracking, and a responsive UI built with React, Tailwind CSS, and React Leaflet. Designed for efficiency, the platform ensures seamless equipment handling, optimized user experience, and secure transactions. Powered by React, Node.js, Express, MongoDB, and Firebase, Gymniac delivers scalability, reliability, and robust functionality for modern fitness facilities.`,
    demoLink: "https://gymniac-d9a71.web.app/",
    github_client: "https://github.com/Salekin-Nabil/gymniac-client-side",
    github_server: "https://github.com/Salekin-Nabil/gymniac-server-side",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "Node JS",
        logo: nodejs,
      },
      {
        name: "Express JS",
        logo: expressjs,
      },
      {
        name: "MongoDB",
        logo: mongodb,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Handyman Service Platform: Simplifying Home Maintenance",
    image: project5,
    category: "Full Stack Web",
    description: `Handyman Service Platform connects users with verified professionals, streamlining booking, payments, and service management. Featuring role-based dashboards, real-time notifications, and automated confirmations, it enhances efficiency, trust, and transparency. Designed for scalability, it ensures a seamless experience for both users and service providers.`,
    demoLink: "https://google.com/",
    github_client: "https://github.com/Salekin-Nabil/handyman-service-client-side",
    github_server: "https://github.com/Salekin-Nabil/handyman-services-server-side",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "Express JS",
        logo: expressjs,
      },
      {
        name: "MongoDB",
        logo: mongodb,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
      {
        name: "Email JS",
        logo: emailjs,
      },
    ],
  },
  {
    title: "Defense on Demand: Smart Law Consultancy Scheduling Platform",
    image: project6,
    category: "Frontend Web",
    description: `Defense on Demand streamlines law consultancy scheduling with an intuitive frontend platform designed for efficiency and ease of use. Featuring a responsive UI built with React, Tailwind CSS, and React Leaflet, it ensures seamless appointment management and an optimized user experience. Powered by React, Tailwind CSS, and Firebase, the platform offers scalability, reliability, and robust functionality for modern legal services.`,
    demoLink: "https://defense-on-demand.web.app/",
    github_client: "https://github.com/Salekin-Nabil/defense-on-demand",
    github_server: "https://github.com/Salekin-Nabil/defense-on-demand",
    stacks: [
      {
        name: "React",
        logo: react,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
];

export const skills = [
  {
    title: "Web3 Development",
    data: [
      {
        skill: "Solidity",
        level: "Experienced",
        logo: solidityicon,
      },
      {
        skill: "Ethereum",
        level: "Experienced",
        logo: ethereumicon,
      },
      {
        skill: "Web3.js",
        level: "Intermediate",
        logo: web3js,
      },
      {
        skill: "Remix IDE",
        level: "Experienced",
        logo: remixide,
      },
      
    ],
  },
  {
    title: "Full Stack Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "Node JS",
        level: "Intermediate",
        logo: nodejs,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Express JS",
        level: "Experienced",
        logo: expressjs,
      },
      {
        skill: "Tailwind",
        level: "Experienced",
        logo: tailwind,
      },
      {
        skill: "MongoDB",
        level: "Intermediate",
        logo: mongodb,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "Email JS",
        level: "Experienced",
        logo: emailjs,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "salekinnabil@gmail.com",
    link: "mailto:salekinnabil@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "Salekin Nabil",
    link: "https://m.me/salekinnabil007",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+16289466188",
    link: "http://wa.me/+16289466188",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Gmail",
    icon: <BiLogoGmail />,
    link: "mailto:salekinnabil@gmail.com",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/Salekin-Nabil",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "http://www.linkedin.com/in/salekin13",
  },
  {
    name: "WhatsApp",
    icon: <BsWhatsapp />,
    link: "http://wa.me/+16289466188",
  },
];

export const testimonials = [
  {
    avatar: michael,
    name: "Mr. Michael Leinhos",
    role: "Faculty Assembly Chair at San Francisco Bay University, CA, USA",
    review: ` Shirajus Salekin Nabil was an outstanding student in my course at San Francisco Bay University. His exceptional analytical skills, problem-solving abilities, and dedication set him apart. I am confident he will thrive in any endeavor he pursues.`,
  },
  {
    avatar: narayn,
    name: "Dr. Narayan Ranjan Chakraborty",
    role: "Associate Head - Daffodil International University, Bangladesh",
    review: ` Shirajus Salekin Nabil showcased exceptional leadership and technical expertise during his blockchain-based final project. His dedication was key to our Q1 journal publication in Elsevier. I am confident he will continue making impactful contributions.`,
  },
  {
    avatar: kawser,
    name: "Mr. Kawser Jamal",
    role: "Founder & Chairman - Ascend Group of Companies",
    review: ` Shirajus Salekin Nabil made a significant impact at Ascend Technology Inc., successfully leading a major project alongside our project manager, Fakharul Hassan. His technical expertise and leadership in building scalable websites were invaluable.`,
  },
  {
    avatar: jabed,
    name: "Dr. Jabed Morshed",
    role: "Lecturer at La Trobe University, Australia",
    review: ` Shirajus Salekin Nabil led his blockchain project with dedication and innovation, playing a key role in our Q1 journal publication in Elsevier. I am confident in his future success in blockchain research.`,
  },
];

export const educations = [
  {
    avatar: sfbu,
    name: "San Francisco Bay University, CA, USA",
    role: "Master's in Computer Science",
    review: ` CGPA : 3.83/4.00`,
    certificate: "/"
  },
  {
    avatar: diu,
    name: "Daffodil International university, Dahak, Bangladesh",
    role: "Bachelor's in Computer Science and Engineering",
    review: ` CGPA : 3.93/4.00`,
    certificate: "https://drive.google.com/file/d/1Uq49j2OhK8ct_pmfA7nW91gUXgYyxe-6/view?usp=drive_link"
  },
  {
    avatar: ppimsc,
    name: "President Prof. Dr. Iajuddin Ahmed Residential Model School & College",
    role: "Higher Secondary Certificate - Science",
    review: ` GPA : 4.83/5.00`,
    certificate: "https://drive.google.com/file/d/1uTyfrqtyp7sL_KAEaFk9HEkZXNfwQV4D/view?usp=sharing"
  },
  {
    avatar: ulab,
    name: "University Laboratory School & College",
    role: "Secondary School Certificate - Science",
    review: ` GPA : 5.00/5.00`,
    certificate: "https://drive.google.com/file/d/18CJ4t-l0gvrE4ini4hzjokVy1sn6bA3z/view?usp=drive_link"
  },
];
