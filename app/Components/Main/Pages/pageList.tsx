import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import WorkHistory from "./WorkHistory";

export const pages = [
  {
    id: 1,
    title: "title.about",
    name: "name.about",
    key: "about",
    icon: "fluent:code-ts-16-filled",
    isOpen: false,
    component: <About />,
  },
  {
    id: 2,
    title: "title.skills",
    name: "name.skills",
    key: "skills",
    icon: "fluent:code-ts-16-filled",
    isOpen: false,
    component: <Skills />,
  },
  {
    id: 3,
    title: "title.works",
    name: "name.works",
    key: "works",
    icon: "fluent:code-ts-16-filled",
    isOpen: false,
    component: <WorkHistory />,
  },
  {
    id: 4,
    title: "title.portfolio",
    name: "name.portfolio",
    key: "portfolio",
    icon: "fluent:code-ts-16-filled",
    isOpen: false,
    component: <Portfolio />,
  },
];
