import { selectedPageList } from "@/lib/features/routes/routeSlice";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import About from "./Main/Pages/About";
import Skills from "./Main/Pages/Skills";
import WorkHistory from "./Main/Pages/WorkHistory";
import Portfolio from "./Main/Pages/Portfolio";
type Props = {};

const Home = (props: Props) => {
  const { t } = useTranslation("common");
  const selectPageList = useSelector(selectedPageList);
  console.log("selectPageList", selectPageList);

  const currentPage = selectPageList.find((i) => i.isOpen);
  console.log("currentPage", currentPage);

  const router = useRouter();
  const selectedLang = window.localStorage.getItem("lng");
  const changeLanguage = (e: any) => {
    window.localStorage.setItem("lng", e.target.value);
    router.reload();
  };
  return (
    <div className='w-full flex-1'>
      {currentPage && currentPage.key === "about" && <About />}
      {currentPage && currentPage.key === "skills" && <Skills />}
      {currentPage && currentPage.key === "works" && <WorkHistory />}
      {currentPage && currentPage.key === "portfolio" && <Portfolio />}
    </div>
  );
};

export default Home;
