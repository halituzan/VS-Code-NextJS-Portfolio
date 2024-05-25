import { selectedPageList } from "@/lib/features/routes/routeSlice";
import { useSelector } from "react-redux";
import About from "./Main/Pages/About";
import Portfolio from "./Main/Pages/Portfolio";
import Skills from "./Main/Pages/Skills";
import WorkHistory from "./Main/Pages/WorkHistory";
import Welcome from "./Main/Pages/Welcome";
import { pages } from "./Main/Pages/pageList";
type Props = {};

const Home = (props: Props) => {
  const selectPageList = useSelector(selectedPageList);
  const currentPage = selectPageList.find((i) => i.isOpen);

  return (
    <div className='w-full flex-1'>
      {pages.map((item) => {
        return currentPage && item.key === currentPage.key
          ? item.component
          : "";
      })}
      {!currentPage && <Welcome />}
    </div>
  );
};

export default Home;
