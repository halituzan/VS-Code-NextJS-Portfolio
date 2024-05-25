import {
  openCurrentPage,
  selectedPageList,
  setSelectedPagelist,
} from "@/lib/features/routes/routeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
export default function PageNav(props: any) {
  const dispatch = useDispatch();
  const selectPageList = useSelector(selectedPageList);
  return (
    <div className='pageNav flex items-center h-10 bg-slate-800 w-full'>
      {selectPageList.map((item: any, index: number, arr: object[]) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              dispatch(
                openCurrentPage({
                  item,
                  isOpen: true,
                })
              );
            }}
            className={`w-max px-3 cursor-pointer h-10 flex justify-center items-center border-x border-x-slate-700 ${
              item.isOpen && "bg-slate-900"
            }`}
          >
            <Icon icon={item.icon} className='text-blue-400' fontSize={20} />
            <p className='ml-1 mr-3 text-[14px]'>{item.name}</p>
            {item.isOpen && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(
                    setSelectedPagelist({
                      type: "remove",
                      data: item,
                    })
                  );
                  dispatch(
                    openCurrentPage({
                      item,
                      isOpen: false,
                    })
                  );

                  if (arr.length - 1 === index) {
                    dispatch(
                      openCurrentPage({
                        item: arr[index - 1],
                        isOpen: true,
                      })
                    );
                  } else {
                    dispatch(
                      openCurrentPage({
                        item: arr[index + 1],
                        isOpen: true,
                      })
                    );
                  }

                  if (arr.length === 0) {
                    dispatch(
                      setSelectedPagelist({
                        data: item,
                        type: "closeAll",
                      })
                    );
                  }
                }}
                className='cursor-pointer hover:bg-slate-700/80 rounded p-0.5'
              >
                <Icon icon='heroicons:x-mark-solid' />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
