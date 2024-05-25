import React from "react";
import { useTheme } from "../Configs/ThemeContext";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { selectedPageList } from "@/lib/features/routes/routeSlice";
type Props = {};

const Navbar = (props: Props) => {
  const { theme } = useTheme();
  const selectPageList = useSelector(selectedPageList);
  const currentPage = selectPageList.find((i) => i.isOpen);
  console.log(currentPage);

  const navBg =
    theme === "dark" ? "bg-slate-800 text-white/90" : "bg-slate-200";
  return (
    <div className={`w-full flex justify-between items-center  h-10 ${navBg}`}>
      <div className='w-[55px] flex justify-center'>
        <Icon icon='skill-icons:vscode-light' fontSize={24} />
      </div>
      <div className='flex items-center'>
        <div className='flex'>
          <Icon
            icon='formkit:arrowleft'
            className={`cursor-pointer ${
              theme === "dark"
                ? "text-slate-400 hover:text-slate-200"
                : "text-slate-900 hover:text-slate-500"
            }`}
          />
          <Icon
            icon='formkit:arrowright'
            className={`cursor-pointer ${
              theme === "dark"
                ? "text-slate-400 hover:text-slate-200"
                : "text-slate-900 hover:text-slate-500"
            }`}
          />
        </div>
        <div
          className={`rounded-md max-w-[500px] w-[500px] py-1 flex justify-center items-center ml-4 border ${
            theme === "dark"
              ? "border-slate-400 text-slate-300 hover:bg-slate-600"
              : "border-slate-400 text-slate-800 hover:bg-slate-300"
          }`}
        >
          <p>{currentPage ? currentPage.title : "Hoş Geldiniz."}</p>
        </div>
      </div>
      <div className='flex items-center'>
        <div
          className={`w-10 h-10 flex justify-center items-center cursor-pointer ${
            theme === "dark" ? "hover:bg-slate-600" : "hover:bg-slate-300"
          }`}
        >
          <Icon icon='ic:round-minus' />
        </div>
        <div
          className={`w-10 h-10 flex justify-center items-center cursor-pointer ${
            theme === "dark" ? "hover:bg-slate-600" : "hover:bg-slate-300"
          }`}
        >
          <Icon icon='ph:square-light' />
        </div>
        <div
          className={`w-10 h-10 flex justify-center items-center cursor-pointer ${
            theme === "dark" ? "hover:bg-slate-600" : "hover:bg-slate-300"
          }`}
        >
          <Icon icon='heroicons:x-mark-solid' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
