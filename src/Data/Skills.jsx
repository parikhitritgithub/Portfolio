import { RiNextjsFill  } from "react-icons/ri";
import { FaReact , FaNode , FaHtml5 } from "react-icons/fa";
import { SiExpress , SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";


export const skills =  [
    {
        name: "React",
        description:
            "Craft interactive user interfaces using components, state, props, and virtual DOM.",
        rating: 2,
        icon: FaReact ,
    },
    {
        name: "Nest.js",
        description:
            "Create scalable and modular applications with a progressive Node.js framework.",
        rating: 4,
        icon: RiNextjsFill ,
    },
    {
        name: "express.js",
        description:
            "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
        rating: 5,
        icon:  SiExpress ,
    },
    {
        name: "Node.js",
        description:
            "Run JavaScript on the server side, enabling dynamic and responsive applications.",
        rating: 5,
        icon: FaNode,
    },
    {
        name: "MongoDB",
        description:
            "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
        rating: 5,
        icon: SiMongodb,
    },
    {
        name: "Javascript",
        description:
            "Create interactive and dynamic web experiences with the versatile scripting language.",
        rating: 5,
        icon:  IoLogoJavascript,
    },
    {
        name: "HTML 5",
        description:
            "Structure web content beautifully with the latest version of HyperText Markup Language.",
        rating: 4,
        icon: FaHtml5 ,
    },
    // {
    //     name: "CSS 3",
    //     description:
    //         "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    //     rating: 4,
    //     icon: Icons.css3,
    // },
    // {
    //     name: "Tailwind CSS",
    //     description:
    //         "Design beautiful, modern websites faster with a utility-first CSS framework.",
    //     rating: 5,
    //     icon: Icons.tailwindcss,
    // },
    // {
    //     name: "Bootstrap",
    //     description:
    //         "Quickly create responsive and appealing web designs using a popular CSS framework.",
    //     rating: 2,
    //     icon: Icons.bootstrap,
    // },
]