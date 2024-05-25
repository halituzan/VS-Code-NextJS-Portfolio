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


  return (
    <div
      className={`flex-1 flex flex-col items-center  justify-center gap-5 w-full h-full ${
        theme === "dark" ? "bg-dark3/80" : "bg-light2/80"
      }`}
    >
      <h1
        className={`text-2xl font-semibold flex items-center justify-center text-center w-2/3 md:min-w-[500px] ${
          theme === "dark" ? "text-light4" : "text-dark3"
        }`}
      >
        {t("welcome.title")}
      </h1>
      <div className='flex items-center justify-center min-w-[500px] text-light1'>
        {
          <InfoText
            text={t("welcome.pages")}
            keyList={["CTRL", "+", "P"]}
            theme={theme}
          />
        }
      </div>
      {/* <div className='flex items-center justify-center min-w-[500px] text-light1'>
        {
          <InfoText
            theme={theme}
            text={t("welcome.search")}
            keyList={["CTRL", "+", "S"]}
          />
        }
      </div> */}
      <div className='flex items-center justify-center min-w-[500px] text-light1'>
        {
          <InfoText
            theme={theme}
            text={t("welcome.lang")}
            keyList={["CTRL", "+", "L"]}
          />
        }
      </div>
      <div className='flex items-center justify-center min-w-[500px] text-light1'>
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
      className={`flex items-center justify-center  w-2/3 md:min-w-[500px] ${
        theme === "dark" ? "text-light1" : "text-dark5"
      }`}
    >
      <p className={`select-none w-1/2 flex md:text-md text-sm text-end justify-end`}>{text}</p>
      <span className='ml-5 select-none w-1/2'>
        {keyList.map((item, index) => {
          return (
            <span
              key={index}
              className={` ${
                isOdd(index)
                  ? "mx-2"
                  : "border border-slate-400 rounded md:text-md text-sm  p-1 px-2"
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
