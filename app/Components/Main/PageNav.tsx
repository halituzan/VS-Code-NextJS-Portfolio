import {
  openCurrentPage,
  selectedPageList,
  setSelectedPagelist,
} from "@/lib/features/routes/routeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useTheme } from "@/app/Configs/ThemeContext";
import { useTranslation } from "react-i18next";
export default function PageNav(props: any) {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const selectPageList = useSelector(selectedPageList);

  const closeHandler = (
    event: any,
    item: any,
    arr: object[],
    index: number
  ) => {
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
  };

  const handleMouseDown = (
    event: any,
    item: any,
    arr: object[],
    index: number
  ) => {
    //* We close the relevant tab using the middle mouse button.
    if (event.button === 1) {
      closeHandler(event, item, arr, index);
    }
  };

  return (
    <div
      className={`pageNav flex items-center h-10 w-full ${
        theme === "dark" ? "bg-slate-800" : "bg-slate-200"
      }`}
    >
      {selectPageList.map((item: any, index: number, arr: object[]) => {
        return (
          <div
            key={item.id}
            onMouseDown={(e) => handleMouseDown(e, item, arr, index)}
            onClick={() => {
              dispatch(
                openCurrentPage({
                  item,
                  isOpen: true,
                })
              );
            }}
            className={`w-max px-3 select-none cursor-pointer h-10 flex justify-center items-center border-x border-x-slate-700 ${
              item.isOpen
                ? theme === "dark"
                  ? "bg-slate-900"
                  : "bg-slate-400 text-white"
                : ""
            }`}
          >
            <Icon
              icon={item.icon}
              className={`${
                theme == "dark" ? "text-blue-400" : "text-blue-600"
              }`}
              fontSize={20}
            />
            <p className='ml-1 mr-3 text-[14px]'>{t(item.name)}</p>
            {item.isOpen && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  closeHandler(e, item, arr, index);
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
