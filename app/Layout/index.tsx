import {
  selectCurrentSide,
  selectedPageList,
} from "@/lib/features/routes/routeSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageNav from "../Components/Main/PageNav";
import PageSide from "../Components/Sides/PageSide";
import SearchSide from "../Components/Sides/SearchSide";
import { useTheme } from "../Configs/ThemeContext";
import { useResizable } from "../Hooks/useResizable";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { theme } = useTheme();
  const [ref] = useResizable();
  const dispatch = useDispatch();
  const currentSide = useSelector(selectCurrentSide);
  const selectPageList = useSelector(selectedPageList);
  const currentSideStorage = localStorage.getItem("currentSide");
  const mainBg =
    theme === "dark" ? "bg-slate-700 text-white/90" : "bg-slate-100";

  return (
    <div
      className={`h-screen overflow-hidden flex flex-col justify-start items-start ${mainBg}`}
    >
      <Navbar />
      <div className='flex justify-start items-start w-full flex-1'>
        <Sidebar />

        <aside
          ref={ref}
          className={`${
            currentSide || currentSideStorage ? "min-w-[250px]" : "w-0 hidden"
          } self-stretch resizable ${
            theme === "dark" ? "bg-slate-950" : "bg-slate-400"
          }`}
        >
          <div className='resizer resizer-right' />
          {(currentSide === "pages" || currentSideStorage === "pages") && (
            <PageSide />
          )}
          {(currentSide === "search" || currentSideStorage === "search") && (
            <SearchSide />
          )}
        </aside>

        <main className='w-full flex flex-col items-start flex-1 h-full'>
          {selectPageList.length > 0 && <PageNav />}

          <div className='flex-1 flex w-full'>{children}</div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
