import Config from "@/app/Configs/config";
import React from "react";
import ProjectCard from "./ProjectCard";
import PortfolioCard from "./PortfolioCard";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div className='p-5 h-[calc(100vh-107px)] overflow-auto'>
      <div className='grid grid-cols-12 gap-5 '>
        {Config.portfolio.map((item) => {
          return <PortfolioCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
