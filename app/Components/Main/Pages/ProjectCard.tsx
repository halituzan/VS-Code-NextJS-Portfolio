import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
type Props = {
  item: any;
};

function ProjectCard({ item }: Props) {
  return (
    <div>
      <h3 className='mt-4 text-2xl'>Projeler</h3>
      <div className='grid grid-cols-12 gap-4 mt-2'>
        {item.project.map((itm: any) => {
          return (
            <div
              className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 rounded-t-xl'
              key={itm.id}
            >
              <Image
                src={itm.img}
                width={300}
                height={200}
                alt={itm.title}
                className='rounded-t-xl w-full'
              />
              <h4 className='bg-white text-center text-xl font-semibold border-b'>
                {itm.title}
              </h4>
              <div className='bg-light6 min-h-32 px-4 rounded-b-xl'>
                {itm.technologies.map((tech:any, index:number) => {
                  return (
                    <div
                      key={index}
                      className='flex mr-3 justify-start items-center'
                    >
                      <Icon icon={itm.icons[index]} />
                      <p className='ml-2'>{tech}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
