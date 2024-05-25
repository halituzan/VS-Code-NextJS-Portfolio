import React from "react";
import { useTheme } from "../Configs/ThemeContext";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentSide,
  setCurrentSide,
} from "@/lib/features/routes/routeSlice";

type Props = {};

const Sidebar = (props: Props) => {
  const { theme } = useTheme();

  const dispatch = useDispatch();
  const currentSide = useSelector(selectCurrentSide);

  const sidebarBg =
    theme === "dark" ? "bg-slate-900 text-white/90" : "bg-slate-300";
  return (
    <div
      className={`min-w-[40px] flex flex-col items-center justify-between self-stretch ${sidebarBg}`}
    >
      <div className='flex flex-col'>
        {menu.map((i) => {
          return (
            <div
              className={`px-3 mb-1 py-3 cursor-pointer ${
                theme === "dark"
                  ? i.path === currentSide
                    ? "border-l-2 border-slate-200"
                    : "border-transparent border-l-2"
                  : i.path === currentSide
                  ? "border-l-2 border-slate-900"
                  : "border-transparent border-l-2"
              }`}
              key={i.id}
              onClick={() => {
                if (currentSide === i.path) {
                  dispatch(setCurrentSide(""));
                } else {
                  dispatch(setCurrentSide(i.path));
                }
              }}
            >
              <Icon
                icon={i.icon}
                fontSize={32}
                className={` ${
                  theme === "dark"
                    ? i.path === currentSide
                      ? "text-slate-200 hover:text-slate-200"
                      : "text-slate-400 hover:text-slate-200"
                    : i.path === currentSide
                    ? "text-slate-900 hover:text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              />
            </div>
          );
        })}
      </div>
      <div>
        {settings.map((i) => {
          return (
            <Link href={"#"} className='px-2 mb-1 py-3' key={i.id}>
              <Icon
                icon={i.icon}
                fontSize={32}
                className={` ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-slate-200"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              />
            </Link>
          );
        })}
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
  {
    id: 2,
    icon: "lucide:search",
    path: "search",
  },
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
