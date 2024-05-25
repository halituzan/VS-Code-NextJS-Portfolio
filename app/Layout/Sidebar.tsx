import React, { useState } from "react";
import { useTheme } from "../Configs/ThemeContext";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentSide,
  setCurrentSide,
} from "@/lib/features/routes/routeSlice";
import { useRouter } from "next/router";

type Props = {};

const Sidebar = (props: Props) => {
  const { theme } = useTheme();
  const router = useRouter();
  const [showLang, setShowLang] = useState(false);
  const selectedLang = window.localStorage.getItem("lng");
  const mode = window.localStorage.getItem("theme");
  const currentSideStorage = localStorage.getItem("currentSide");

  const changeLanguage = (lng: string) => {
    window.localStorage.setItem("lng", lng);
    router.reload();
  };
  const changeMode = (m: string) => {
    window.localStorage.setItem("theme", m);
    router.reload();
  };
  const dispatch = useDispatch();
  const currentSide = useSelector(selectCurrentSide);

  const sidebarBg =
    theme === "dark"
      ? "bg-dark2 text-light5/90 shadow shadow-slate-800"
      : "bg-light2 shadow shadow-white";
  return (
    <div
      className={`min-w-[40px] flex  z-10 flex-col items-center  justify-between self-stretch ${sidebarBg}`}
    >
      <div className='flex flex-col '>
        {menu.map((i) => {
          return (
            <div
              className={`px-3 mb-1 py-3 cursor-pointer ${
                theme === "dark"
                  ? i.path === currentSide || i.path === currentSideStorage
                    ? "border-l-2 border-slate-200"
                    : "border-transparent border-l-2"
                  : i.path === currentSide || i.path === currentSideStorage
                  ? "border-l-2 border-slate-900"
                  : "border-transparent border-l-2"
              }`}
              key={i.id}
              onClick={() => {
                if (currentSide === i.path) {
                  dispatch(setCurrentSide(""));
                  localStorage.setItem("currentSide", "");
                } else {
                  dispatch(setCurrentSide(i.path));
                  localStorage.setItem("currentSide", i.path);
                }
              }}
            >
              <Icon
                icon={i.icon}
                fontSize={32}
                className={` ${
                  theme === "dark"
                    ? i.path === currentSide || i.path === currentSideStorage
                      ? "text-light3 hover:text-light3"
                      : "text-light1 hover:text-light3"
                    : i.path === currentSide || i.path === currentSideStorage
                    ? "text-dark2 hover:text-dark2"
                    : "text-dark5 hover:text-dark2"
                }`}
              />
            </div>
          );
        })}
      </div>
      <div>
        {/* {settings.map((i) => {
          return (
            <div className='px-2 mb-1 py-3' key={i.id}>
              <Icon
                icon={i.icon}
                fontSize={32}
                className={` ${
                  theme === "dark"
                    ? "text-light1 hover:text-light3"
                    : "text-dark4 hover:text-dark2"
                }`}
              />
            </div>
          );
        })} */}
        <div
          className='px-2 mb-1 py-3 cursor-pointer relative'
          onClick={() => changeMode(mode === "light" ? "dark" : "light")}
        >
          <Icon
            icon={
              mode == "light"
                ? "material-symbols-light:mode-night"
                : "material-symbols-light:light-mode"
            }
            fontSize={32}
            className={` ${
              theme === "dark"
                ? "text-light1 hover:text-light3"
                : "text-dark4 hover:text-dark2"
            }`}
          />
        </div>
        <div
          className='px-2 mb-1 py-3 relative'
          onMouseEnter={() => setShowLang(true)}
          onMouseLeave={() => setShowLang(false)}
        >
          <Icon
            icon={selectedLang == "tr" ? "circle-flags:tr" : "circle-flags:gb"}
            fontSize={32}
            className={` ${
              theme === "dark"
                ? "text-light1 hover:text-light3"
                : "text-dark4 hover:text-dark2"
            }`}
          />
          {showLang && (
            <div className='absolute z-50 -top-10 left-12 flex flex-col justify-center items-center p-1 rounded-md bg-dark6'>
              <Icon
                onClick={() => changeLanguage("tr")}
                icon={"circle-flags:tr"}
                fontSize={32}
                className={`mb-2 cursor-pointer hover:shadow hover:shadow-slate-300 p-1 ${
                  theme === "dark"
                    ? "text-light1 hover:text-light3"
                    : "text-dark4 hover:text-dark2"
                }`}
              />
              <Icon
                onClick={() => changeLanguage("en")}
                icon={"circle-flags:gb"}
                fontSize={32}
                className={`cursor-pointer hover:shadow hover:shadow-slate-300 p-1 ${
                  theme === "dark"
                    ? "text-light1 hover:text-light3"
                    : "text-dark4 hover:text-dark2"
                }`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const menu = [
  {
    id: 1,
    icon: "lucide:files",
    path: "pages",
  },
  // {
  //   id: 2,
  //   icon: "lucide:search",
  //   path: "search",
  // },
];
const settings = [
  {
    id: 1,
    icon: "gg:profile",
    path: "files",
  },
  {
    id: 2,
    icon: "ic:outline-settings",
    path: "search",
  },
];
