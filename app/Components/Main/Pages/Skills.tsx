import Config from "@/app/Configs/config";
import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
type Props = {};

const Skills = (props: Props) => {
  const { t } = useTranslation("skills");
  return (
    <div className='w-full p-5 h-[calc(100vh-107px)] overflow-auto'>
      <div>
        <h2 className='text-2xl mb-2 border-b pb-1'>{t("title.software")}</h2>
        <div className='grid grid-cols-6 gap-5'>
          {Config.skills.software.map((item, index) => {
            return (
              <div
                key={index}
                className='col-span-6 sm:col-span-3 md:col-span-2 flex items-center'
              >
                <Icon icon={item.icon} fontSize={"1.5rem"} />
                <p className='text-xl ml-2'>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='mt-10'>
        <h2 className='text-2xl mb-2 border-b pb-1'>{t("title.ui")}</h2>
        <div className='grid grid-cols-6 gap-5'>
          {Config.skills.ui.map((item, index) => {
            return (
              <div
                key={index}
                className='col-span-6 sm:col-span-3 md:col-span-2 flex items-center '
              >
                <Icon icon={item.icon} fontSize={"1.5rem"} />
                <p className='text-xl ml-2'>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='mt-10'>
        <h2 className='text-2xl mb-2 border-b pb-1'>{t("title.design")}</h2>
        <div className='grid grid-cols-6 gap-5'>
          {Config.skills.programs.map((item, index) => {
            return (
              <div
                key={index}
                className='col-span-6 sm:col-span-3 md:col-span-2  flex items-center '
              >
                <Icon icon={item.icon} fontSize={"1.5rem"} />
                <p className='text-xl ml-2'>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
