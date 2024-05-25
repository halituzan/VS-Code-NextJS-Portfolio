import {
  openCurrentPage,
  selectedPageList,
  setSelectedPagelist,
} from "@/lib/features/routes/routeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useTheme } from "@/app/Configs/ThemeContext";
import { useTranslation } from "react-i18next";

interface PageItem {
  icon: string;
  id: string;
  isOpen: boolean;
  key: string;
  name: string;
  title: string;
}

export default function PageNav(props: any) {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const selectPageList = useSelector(selectedPageList);

  const closeHandler = (
    event: any,
    item: any,
    arr: PageItem[],
    index: number
  ) => {
    console.log("item", item);

    dispatch(
      setSelectedPagelist({
        type: "remove",
        data: {
          icon: item.icon,
          id: item.id,
          isOpen: item.isOpen,
          key: item.key,
          name: item.name,
          title: item.title,
        },
      })
    );
    dispatch(
      openCurrentPage({
        item: {
          icon: item.icon,
          id: item.id,
          isOpen: item.isOpen,
          key: item.key,
          name: item.name,
          title: item.title,
        },
        isOpen: false,
      })
    );

    if (arr.length - 1 === index) {
      dispatch(
        openCurrentPage({
          item: {
            icon: arr[index - 1]?.icon,
            id: arr[index - 1]?.id,
            isOpen: arr[index - 1]?.isOpen,
            key: arr[index - 1]?.key,
            name: arr[index - 1]?.name,
            title: arr[index - 1]?.title,
          },
          isOpen: true,
        })
      );
    } else {
      dispatch(
        openCurrentPage({
          item: {
            icon: arr[index + 1]?.icon,
            id: arr[index + 1]?.id,
            isOpen: arr[index + 1]?.isOpen,
            key: arr[index + 1]?.key,
            name: arr[index + 1]?.name,
            title: arr[index + 1]?.title,
          },
          isOpen: true,
        })
      );
    }

    if (arr.length === 0) {
      dispatch(
        setSelectedPagelist({
          data: {
            icon: item.icon,
            id: item.id,
            isOpen: item.isOpen,
            key: item.key,
            name: item.name,
            title: item.title,
          },
          type: "closeAll",
        })
      );
    }
  };

  const handleMouseDown = (
    event: any,
    item: any,
    arr: PageItem[],
    index: number
  ) => {
    //* We close the relevant tab using the middle mouse button.
    if (event.button === 1) {
      closeHandler(event, item, arr, index);
    }
  };

  return (
    <div
      className={`pageNav flex items-center divide-x divide-slate-400 md:w-auto w-[calc(100vw-40px)] overflow-auto h-10  ${
        theme === "dark" ? "bg-dark3" : "bg-light3"
      }`}
    >
      {selectPageList.map((item: any, index: number, arr: object[]) => {
        return (
          <div
            key={item.id}
            onMouseDown={(e) => handleMouseDown(e, item, arr as PageItem[], index)}
            onClick={() => {
              dispatch(
                openCurrentPage({
                  item: {
                    icon: item.icon,
                    id: item.id,
                    isOpen: item.isOpen,
                    key: item.key,
                    name: item.name,
                    title: item.title,
                  },
                  isOpen: true,
                })
              );
            }}
            className={`w-max px-3 select-none cursor-pointer h-10 flex justify-center items-center ${
              item.isOpen
                ? theme === "dark"
                  ? "bg-dark2"
                  : "bg-light1 text-light5"
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
                  closeHandler(e, item, arr as PageItem[], index);
                }}
                className='cursor-pointer hover:bg-dark4/80 rounded p-0.5'
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
