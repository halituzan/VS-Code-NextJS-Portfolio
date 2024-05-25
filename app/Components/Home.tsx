import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
type Props = {};

const Home = (props: Props) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const selectedLang = window.localStorage.getItem("lng");
  const changeLanguage = (e: any) => {
    window.localStorage.setItem("lng", e.target.value);
    router.reload();
  };
  return (
    <div className=''>
      asd
    </div>
  );
};

export default Home;
