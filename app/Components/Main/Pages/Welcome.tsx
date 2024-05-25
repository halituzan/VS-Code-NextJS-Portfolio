import { useTheme } from "@/app/Configs/ThemeContext";
import { setCurrentSide } from "@/lib/features/routes/routeSlice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

type Props = {};

const Welcome = (props: Props) => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
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
        localStorage.setItem("openPortfolio","true")
        localStorage.setItem("currentSide","pages")
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

  return (
    <div
      className={`flex-1 flex flex-col items-center justify-center gap-5 w-full h-full overflow-y-auto ${
        theme === "dark" ? "bg-slate-800/80" : "bg-slate-300/80"
      }`}
    >
      <h1
        className={`text-2xl font-semibold flex items-center justify-center text-center min-w-[500px] ${
          theme === "dark" ? "text-slate-100" : "text-slate-800"
        }`}
      >
        {t("welcome.title")}
      </h1>
      <div className='flex items-center justify-center min-w-[500px] text-slate-400'>
        {
          <InfoText
            text={t("welcome.pages")}
            keyList={["CTRL", "+", "P"]}
            theme={theme}
          />
        }
      </div>
      {/* <div className='flex items-center justify-center min-w-[500px] text-slate-400'>
        {
          <InfoText
            theme={theme}
            text={t("welcome.search")}
            keyList={["CTRL", "+", "S"]}
          />
        }
      </div> */}
      <div className='flex items-center justify-center min-w-[500px] text-slate-400'>
        {
          <InfoText
            theme={theme}
            text={t("welcome.lang")}
            keyList={["CTRL", "+", "L"]}
          />
        }
      </div>
      <div className='flex items-center justify-center min-w-[500px] text-slate-400'>
        {
          <InfoText
            theme={theme}
            text={t("welcome.mode")}
            keyList={["CTRL", "+", "M"]}
          />
        }
      </div>
    </div>
  );
};

export default Welcome;
function isOdd(num: number) {
  return num % 2;
}
export const InfoText = ({
  text,
  keyList,
  theme,
}: {
  text: string;
  keyList: string[];
  theme: string;
}) => {
  return (
    <div
      className={`flex items-center justify-center min-w-[500px] ${
        theme === "dark" ? "text-slate-400" : "text-slate-600"
      }`}
    >
      <p className={`select-none w-1/2 flex justify-end`}>{text}</p>
      <span className='ml-5 select-none w-1/2'>
        {keyList.map((item, index) => {
          return (
            <span
              key={index}
              className={` ${
                isOdd(index)
                  ? "mx-2"
                  : "border border-slate-400 rounded p-1 px-2"
              }`}
            >
              {item}
            </span>
          );
        })}
      </span>
    </div>
  );
};
