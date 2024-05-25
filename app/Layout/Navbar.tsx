import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../Configs/ThemeContext";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { selectedPageList } from "@/lib/features/routes/routeSlice";
import { useTranslation } from "react-i18next";
type Props = {};

const Navbar = (props: Props) => {
  const { t } = useTranslation("common");
  const { theme } = useTheme();
  const selectPageList = useSelector(selectedPageList);
  const currentPage = selectPageList.find((i) => i.isOpen);
  const [isSearch, setIsSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearch) {
      if (inputRef.current) {
        (inputRef.current as HTMLInputElement).focus();
      }
    }
  }, [isSearch]);

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
          onClick={() => {
            setIsSearch(true);
          }}
          className={`rounded-md max-w-[500px] w-auto md:w-[500px]  flex justify-center items-center ml-4 border ${
            theme === "dark"
              ? "border-slate-400 text-slate-300 hover:bg-slate-600"
              : "border-slate-400 text-slate-800 hover:bg-slate-300"
          }`}
        >
          {!isSearch ? (
            <p className='py-1 px-4'>
              {currentPage ? t(currentPage.title) : t("welcome")}
            </p>
          ) : (
            <input
              ref={inputRef}
              type='text'
              placeholder='Search...'
              onBlur={() => {
                setIsSearch(false);
              }}
              className='outline-none w-full py-1 rounded-md px-4 bg-slate-400 text-white'
            />
          )}
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
