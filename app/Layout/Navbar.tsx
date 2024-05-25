import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../Configs/ThemeContext";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedPageList,
  setCurrentSide,
} from "@/lib/features/routes/routeSlice";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
type Props = {};

const Navbar = (props: Props) => {
  const { t } = useTranslation("common");
  const { theme } = useTheme();
  const selectPageList = useSelector(selectedPageList);
  const currentPage = selectPageList.find((i) => i.isOpen);
  const [isSearch, setIsSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const elem = document.documentElement;
    if (!isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
      }
      // else if (elem.mozRequestFullScreen) {
      //   // Firefox
      //   elem.mozRequestFullScreen();
      // } else if (elem.webkitRequestFullscreen) {
      //   // Chrome, Safari and Opera
      //   elem.webkitRequestFullscreen();
      // } else if (elem.msRequestFullscreen) {
      //   // IE/Edge
      //   elem.msRequestFullscreen();
      // }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      // else if (document.mozCancelFullScreen) {
      //   // Firefox
      //   document.mozCancelFullScreen();
      // } else if (document.webkitExitFullscreen) {
      //   // Chrome, Safari and Opera
      //   document.webkitExitFullscreen();
      // } else if (document.msExitFullscreen) {
      //   // IE/Edge
      //   document.msExitFullscreen();
      // }
    }
    setIsFullscreen(!isFullscreen);
  };

  const router = useRouter();
  const dispatch = useDispatch();
  const mode = window.localStorage.getItem("theme");
  const lang = window.localStorage.getItem("lng");
  const changeMode = (m: string) => {
    window.localStorage.setItem("theme", m);
    router.reload();
  };
  const changeLanguage = (lng: string) => {
    window.localStorage.setItem("lng", lng);
    router.reload();
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.ctrlKey && event.key === "p") {
        event.preventDefault();
        dispatch(setCurrentSide("pages"));
        localStorage.setItem("openPortfolio", "true");
        localStorage.setItem("currentSide", "pages");
      }
      // if (event.ctrlKey && event.key === "s") {
      //   event.preventDefault();
      //   dispatch(setCurrentSide("search"));
      //   localStorage.setItem("currentSide","search")
      // }
      if (event.ctrlKey && event.key === "l") {
        event.preventDefault();
        changeLanguage(lang === "tr" ? "en" : "tr");
      }
      if (event.ctrlKey && event.key === "m") {
        event.preventDefault();
        changeMode(mode === "light" ? "dark" : "light");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isSearch) {
      if (inputRef.current) {
        (inputRef.current as HTMLInputElement).focus();
      }
    }
  }, [isSearch]);

  const navBg =
    theme === "dark" ? "bg-dark3 text-light5/90" : "bg-light3";
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
                ? "text-light1 hover:text-light3"
                : "text-dark2 hover:text-dark6"
            }`}
          />
          <Icon
            icon='formkit:arrowright'
            className={`cursor-pointer ${
              theme === "dark"
                ? "text-light1 hover:text-light3"
                : "text-dark2 hover:text-dark6"
            }`}
          />
        </div>
        <div
          onClick={() => {
            setIsSearch(true);
          }}
          className={`rounded-md max-w-[500px] w-auto md:w-[500px]  flex justify-center items-center ml-4 border ${
            theme === "dark"
              ? "border-slate-400 text-light2 hover:bg-dark5"
              : "border-slate-400 text-dark3 hover:bg-light2"
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
              className='outline-none w-full py-1 rounded-md px-4 bg-light1 text-light5'
            />
          )}
        </div>
      </div>
      <div className='flex items-center'>
        {/* <div
          className={`w-10 h-10 flex justify-center items-center cursor-pointer ${
            theme === "dark" ? "hover:bg-dark5" : "hover:bg-light2"
          }`}
        >
          <Icon icon='ic:round-minus' />
        </div> */}
        <div
          onClick={toggleFullscreen}
          className={`w-10 h-10 md:flex hidden justify-center items-center cursor-pointer ${
            theme === "dark" ? "hover:bg-dark5" : "hover:bg-light2"
          }`}
        >
          <Icon icon='ph:square-light' />
        </div>
        {/* <div
          className={`w-10 h-10 flex justify-center items-center cursor-pointer ${
            theme === "dark" ? "hover:bg-dark5" : "hover:bg-light2"
          }`}
        >
          <Icon icon='heroicons:x-mark-solid' />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
