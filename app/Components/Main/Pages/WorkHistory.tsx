import Config from "@/app/Configs/config";
import { useTheme } from "@/app/Configs/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import ProjectCard from "./ProjectCard";
type Props = {};

function WorkHistory({}: Props) {
  const { workHistories } = Config;
  const { t } = useTranslation("works");
  const { theme } = useTheme();
  return (
    <div
      className={`flex-1 flex flex-col items-start md:gap-5 w-full h-[calc(100vh-108px)] overflow-y-auto ${
        theme === "dark" ? "bg-dark4" : "bg-light2"
      }`}
    >
      {workHistories.map((item) => {
        return (
          <div key={item.id} className='w-full p-4'>
            <h3 className='text-xl pb-1 w-full'>{item.job}</h3>
            <div className='flex text-slate-500 items-center'>
              <Link
                href={item.url}
                target='_blank'
                className='italic hover:underline'
              >
                {item.company}
              </Link>
              <p className='mx-3'>{item.companyLocation}</p>
              <p>{item.workStart + " ~ " + item.workEnd}</p>
            </div>
            <div>
              <p>{t(item.description)}</p>
            </div>
            <div className='mt-2 flex flex-col'>
              <p className='mr-1 mb-2'>{t("text.technologies")}: </p>
              <div className='flex flex-wrap'>
                {item.technologies.map((i) => {
                  return (
                    <p
                      key={i}
                      className={`px-3 py-1 rounded border mr-1 mt-1 cursor-pointer select-none ${
                        theme === "dark"
                          ? "hover:bg-slate-400 hover:text-white border-slate-500"
                          : "hover:bg-slate-400 hover:text-white border-slate-500"
                      } `}
                    >
                      {i}
                    </p>
                  );
                })}
              </div>
            </div>
            {item.project.length > 0 && <ProjectCard item={item} />}
          </div>
        );
      })}
    </div>
  );
}

export default WorkHistory;
