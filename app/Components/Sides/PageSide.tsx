import { useTheme } from "@/app/Configs/ThemeContext";
import {
  openCurrentPage,
  pageListing,
  selectedPageList,
  setSelectedPagelist,
} from "@/lib/features/routes/routeSlice";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
type Props = {};

const PageSide = (props: Props) => {
  const { t } = useTranslation("common");
  const [openPotfolio, setOpenPortfolio] = useState(false);
  const openPortfolioStorage = localStorage.getItem("openPortfolio");

  const dispatch = useDispatch();
  const { theme } = useTheme();
  const pageListStore = useSelector(selectedPageList);
  const pageList = useSelector(pageListing);

  const pageHandler = (data: any) => {
    if (pageListStore.some((i) => i.id == data.id)) {
      dispatch(
        openCurrentPage({
          item: {
            icon: data.icon,
            id: data.id,
            isOpen: data.isOpen,
            key: data.key,
            name: data.name,
            title: data.title,
          },
          isOpen: true,
        })
      );
    } else {
      dispatch(
        setSelectedPagelist({
          data: {
            icon: data.icon,
            id: data.id,
            isOpen: data.isOpen,
            key: data.key,
            name: data.name,
            title: data.title,
          },
          type: "closeAll",
        })
      );
      dispatch(
        setSelectedPagelist({
          data: {
            icon: data.icon,
            id: data.id,
            isOpen: data.isOpen,
            key: data.key,
            name: data.name,
            title: data.title,
          },
          type: "add",
        })
      );
      dispatch(
        openCurrentPage({
          item: {
            icon: data.icon,
            id: data.id,
            isOpen: data.isOpen,
            key: data.key,
            name: data.name,
            title: data.title,
          },
          isOpen: true,
        })
      );
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='h-10 flex items-center justify-between pl-5 pr-2 uppercase font-bold text-[14px]'>
        {t("sidebar.title")}
        <div
          className={`p-2 cursor-pointer rounded-md ${
            theme === "dark" ? "hover:bg-dark3 " : "hover:bg-light2"
          }`}
        >
          <Icon icon='tabler:dots' />
        </div>
      </div>
      <div
        className={`w-full flex items-center cursor-pointer ${
          theme === "dark" ? "bg-dark3/80" : "bg-light2/80"
        }`}
        onClick={() => {
          setOpenPortfolio(!openPotfolio);
          if (openPotfolio) {
            localStorage.setItem("openPortfolio", "false");
          } else {
            localStorage.setItem("openPortfolio", "true");
          }
        }}
      >
        {openPotfolio || openPortfolioStorage == "true" ? (
          <Icon
            icon='iconamoon:arrow-down-2-light'
            fontSize={"1.4rem"}
            className='mx-1'
          />
        ) : (
          <Icon
            icon='iconamoon:arrow-right-2-light'
            fontSize={"1.4rem"}
            className='mx-1'
          />
        )}

        <p>Portfolio</p>
      </div>
      {(openPotfolio || openPortfolioStorage == "true") && (
        <div className='flex flex-col'>
          {pageList.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => pageHandler(item)}
                className={`flex items-center select-none pl-6 my-0.5 cursor-pointer ${
                  item.isOpen && theme === "dark"
                    ? "bg-dark5"
                    : item.isOpen && theme === "light"
                    ? "bg-dark6 text-light5"
                    : ""
                }`}
              >
                <Icon
                  icon={item.icon}
                  className={`mr-0.5 ${
                    theme === "dark" ? "text-blue-400" : "text-blue-500"
                  }`}
                />
                <p className='text-[14px]'>{t(item.name)}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PageSide;
