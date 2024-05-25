import React from "react";
import { useTheme } from "../Configs/ThemeContext";

type Props = {};

const Footer = (props: Props) => {
  const { theme } = useTheme();

  const footerBg =
    theme === "dark" ? "bg-dark3 text-light5/90" : "bg-light3";

  return (
    <div className={`w-full h-6 px-1 flex ${footerBg}`}>
      <div>VS</div>
      <div className="ml-1">Louchpad</div>
    </div>
  );
};

export default Footer;
