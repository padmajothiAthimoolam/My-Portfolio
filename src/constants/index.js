import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    prometheus,
    tcs,
    healthconnect,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Developer",
      company_name: "Prometheus software - Commodity Forwarders Inc.",
      icon: prometheus,
      iconBg: "#383E56",
      date: "May 2023 - September 2024",
      points: [
        "The Shipment Dashboard is an integrated application that streamlines shipment management and employee activities at CFI Perishables.",
        "The system will offer real-time shipment visibility, automated update notifications, and historical tracking data for performance analysis.",
        "The employee login/logout system will ensure secure access, data privacy, and user role restrictions for sensitive information.",
        "Visual dashboards for quick insights and exportable reports for stakeholder sharing.."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Prometheus software - iHeartMedia - Polaris",
      icon: prometheus,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Apr 2023",
      points: [
        "Develop a user-friendly interface for easy navigation of media and entertainment offerings.",
        "Implement features for accessing radio broadcasting, digital platforms, and podcasts.",
        "Design event promotion tools to showcase upcoming events effectively.",
        "Ensure responsiveness and accessibility across devices for all users.",
        "Optimize site performance for fast loading times and smooth interactions."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Prometheus software- iHeartMedia - inferno",
      icon: prometheus,
      iconBg: "#383E56",
      date: "Jun 2021 - Oct 2022",
      points: [
        "Supporting iHeartMedia’s broader goal of optimizing usability across over 960 radio stations.",
        "Enhancing user experience for listeners with engaging and dynamic content.",
        "Utilizing an internal CMS for efficient content management and updates.",
        "Streamlining information delivery and improving audience interaction.",
        "Implementing internationalization and localization to cater to diverse audiences and languages.",
        "Optimizing the website for SEO to improve visibility and attract more listeners."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Trimah Technologies LLC",
      iconBg: "#383E56",
      date: "Oct 2019 - May 2021",
      points: [
        "Designed nd implemented user-friendly interfaces for the Unified Desktop, ensuring a seamless experience for users accessing various financial services",
        "Improved application performance by optimizing code, minimizing loading times, and implementing best practices for web performance.",
        "Ensure fast loading times and smooth interactions by optimizing assets and minimizing HTTP requests",
        "Collaborated with backend teams to integrate RESTful APIs and MongoDB for data management, ensuring smooth data flow and functionality across the platform."
      ],
    },
    {
      title: "Web developer",
      company_name: "TATA consultancy services - Bank of America",
      icon: tcs,
      iconBg: "#E6DEDD",
      date: "Sep 2006 - May 2009",
      points: [
        "Create a user-friendly interface for seamless loan application submissions.",
        "Implement secure authentication and data protection measures.",
        "Optimize the application for performance and responsiveness across devices.",
        "Integrate real-time tracking for application status updates.",
        "Facilitate communication channels for user support and inquiries."
      ],
    },
  ];
  
  const blogs = [
    {
      blog: "Detailed checklist for developers to conduct effective code reviews in React, helping ensure code quality and best practices.",
      link: "https://dev.to/padmajothi_athimoolam_23d/react-code-review-essentials-a-detailed-checklist-for-developers-20n2",
    },
    {
      blog: "How to simplify data fetching in React by using React Query instead of the traditional useEffect hook, making it easier to manage server state.",
      link: "https://dev.to/padmajothi_athimoolam_23d/simplifying-fetching-data-with-react-query-replacing-useeffect-ac4",
    },
    {
      blog: "How to use Redux Toolkit's createSlice feature to simplify state management in React applications by reducing boilerplate code.",
      link: "https://dev.to/padmajothi_athimoolam_23d/the-power-of-redux-toolkits-createslice-1p1k",
    },
  ];
  
  const projects = [  
    {
      name: "Health Connect",
      description:
        " Developed a health management platform using Next.js, React, and TypeScript, featuring Appwrite integration for authentication and real-time updates, a cohesive design with the Shadcn Design System, SMS notifications for timely user alerts, and deployed on Vercel for scalability and performance.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "shadcn",
          color: "blue-text-gradient",
        },
      ],
      image: healthconnect,
      link: "https://health-connect--rho.vercel.app/",
      source_code_link: "https://github.com/padmajothiAthimoolam/Health-Connect",
    },
  ];
  
  export { services, technologies, experiences, blogs, projects };