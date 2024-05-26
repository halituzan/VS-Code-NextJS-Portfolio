import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "@/app/Configs/ThemeContext";
import { useTranslation } from "react-i18next";
import Link from "next/link";
type Props = {
  item: any;
};

function PortfolioCard({ item }: Props) {
  const { theme } = useTheme();
  const { t } = useTranslation("works");
  return (
    <div
      className={`relative rounded-lg col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 rounded-t-xl ${
        theme === "dark" ? "bg-dark6" : "bg-light6"
      }`}
      key={item.id}
    >
      <div
        className={`absolute top-0 left-0 w-full flex justify-start p-2  rounded-t-lg items-center ${
          theme == "dark" ? "bg-dark2/95" : "bg-light6/95"
        }`}
      >
        <div className='flex justify-start items-center'>
          {item.url.live && (
            <Link
              href={item.url.live}
              target='_blank'
              className={`mr-2 rounded-full flex justify-center items-center ${
                theme === "dark" ? "bg-dark3" : "bg-light6"
              }`}
            >
              <Icon
                icon='fluent-mdl2:website'
                className={`${theme === "dark" ? "hover:text-light5":"hover:text-dark5"}`}
                fontSize={28}
              />
            </Link>
          )}
          {item.url.repo && (
            <Link
              href={item.url.repo}
              target='_blank'
              className={`rounded-full flex justify-center items-center ${
                theme === "dark" ? "bg-dark3" : "bg-light6"
              }`}
            >
              <Icon
                icon='mdi:github'
                className={`${theme === "dark" ? "hover:text-light5":"hover:text-dark5"}`}
                fontSize={30}
              />
            </Link>
          )}
        </div>
        <h4
          className={`text-center flex justify-center items-center flex-1 text-xl font-bold ${
            theme === "dark" ? "" : ""
          }`}
        >
          {item.title}
        </h4>
      </div>
      <Image
        src={item.img}
        width={1900}
        height={900}
        alt={item.title}
        className='rounded-t-xl w-full'
      />

      <div
        className={`py-5 border-t-2 border-dark6 flex flex-col items-center justify-start self-stretch px-4 rounded-b-xl ${
          theme === "dark" ? "bg-dark6" : "bg-light6 "
        }`}
      >
        <div className='flex mb-2 '>
          {item.technologies.map((tech: any, index: number) => {
            return (
              <div
                title={item.name}
                key={index}
                className='flex mr-3 justify-start items-center'
              >
                <Icon icon={item.icons[index]} fontSize={32} />
              </div>
            );
          })}
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;
