import { useTheme } from "../Configs/ThemeContext";
type Props = {};
type Time = {
  hours: number;
  minutes: number;
};
const Footer = (props: Props) => {
  const { theme } = useTheme();

  const footerBg = theme === "dark" ? "bg-dark3 text-light5/90" : "bg-light3";

  return (
    <div className={`w-full h-7 px-1 flex ${footerBg}`}>
      {/* <div>VS</div> */}
      <div className='ml-1 hidden md:flex items-center'>
        <a href='https://x.com/uzandev' target='_blank' className=''>
          <img
            alt='X (formerly Twitter) Follow'
            src='https://img.shields.io/twitter/follow/uzandev'
          />
        </a>
        <a href='https://github.com/halituzan' target='_blank' className='ml-2'>
          <img
            alt='GitHub followers'
            src='https://img.shields.io/github/followers/halituzan'
          />
        </a>
        <a href='https://github.com/halituzan' target='_blank' className='ml-2'>
          <img
            alt="GitHub User's stars"
            src='https://img.shields.io/github/stars/halituzan'
          />
        </a>
        <a
          href='https://wakatime.com/@3624ae8f-b305-4c12-b620-3e5fb952fbe2'
          target='_blank'
          className='ml-2'
        >
          <img
            src='https://wakatime.com/badge/user/3624ae8f-b305-4c12-b620-3e5fb952fbe2.svg'
            alt='Total time coded since Jun 10 2023'
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
