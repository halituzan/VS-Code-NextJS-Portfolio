import React from "react";
import { useTheme } from "../Configs/ThemeContext";

type Props = {};

const Footer = (props: Props) => {
  const { theme } = useTheme();

  const footerBg =
    theme === "dark" ? "bg-slate-800 text-white/90" : "bg-slate-200";

  return (
    <div className={`w-full h-6 px-1 flex ${footerBg}`}>
      <div>VS</div>
      <div className="ml-1">Louchpad</div>
    </div>
  );
};

export default Footer;
