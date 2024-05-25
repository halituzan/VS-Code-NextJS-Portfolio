import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import {
  openCurrentPage,
  pageListing,
  selectedPageList,
  setSelectedPagelist,
} from "@/lib/features/routes/routeSlice";
type Props = {};

const PageSide = (props: Props) => {
  const [openPotfolio, setOpenPortfolio] = useState(false);
  const dispatch = useDispatch();
  const pageListStore = useSelector(selectedPageList);
  const pageList = useSelector(pageListing);

  const pageHandler = (data: any) => {
    dispatch(openCurrentPage({ item: data, isOpen: true }));
    if (pageListStore.some((i) => i.id == data.id)) {
    } else {
      dispatch(
        setSelectedPagelist({
          data,
          type: "closeAll",
        })
      );
      dispatch(
        setSelectedPagelist({
          data,
          type: "add",
        })
      );
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='h-10 flex items-center justify-between pl-5 pr-2 uppercase text-[14px]'>
        Gezgin
        <div className='hover:bg-slate-800 p-2 cursor-pointer rounded-md'>
          <Icon icon='tabler:dots' />
        </div>
      </div>
      <div
        className='w-full bg-slate-800/80 flex items-center cursor-pointer'
        onClick={() => {
          setOpenPortfolio(!openPotfolio);
        }}
      >
        {!openPotfolio ? (
          <Icon
            icon='iconamoon:arrow-right-2-light'
            fontSize={"1.4rem"}
            className='mx-1'
          />
        ) : (
          <Icon
            icon='iconamoon:arrow-down-2-light'
            fontSize={"1.4rem"}
            className='mx-1'
          />
        )}

        <p>Portfolio</p>
      </div>
      {openPotfolio && (
        <div className='flex flex-col'>
          {pageList.map((item) => {
            console.log(item.isOpen);

            return (
              <div
                key={item.id}
                onClick={() => pageHandler(item)}
                className={`flex items-center pl-6 my-0.5 cursor-pointer ${
                  item.isOpen && "bg-slate-600"
                }`}
              >
                <Icon icon={item.icon} className='text-blue-400 mr-0.5' />
                <p className='text-[14px]'>{item.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PageSide;
