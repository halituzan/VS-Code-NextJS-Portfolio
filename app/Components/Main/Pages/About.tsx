import Config from "@/app/Configs/config";
import { useTheme } from "@/app/Configs/ThemeContext";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const { highlightList } = Config;
type Props = {};

const About = (props: Props) => {
  const { t } = useTranslation("profile");
  const { theme } = useTheme();
  const getHighlightedText = (text: string, highlights: string[]) => {
    // Split the text into sentences while keeping the period at the end
    const sentences = text.split(/(?<=\.)/);

    return sentences.map((sentence, index) => {
      // Split the sentence into words and spaces while keeping the spaces
      const words = sentence.split(/(\s+)/);

      // Map through each word and bold the highlights
      const highlightedSentence = words.map((word, wordIndex) => {
        const cleanWord = word.replace(/[.,]/g, "").toLowerCase(); // Remove punctuation for comparison
        return highlights.includes(cleanWord) ? (
          <strong key={wordIndex}>{word}</strong>
        ) : (
          word
        );
      });

      return (
        <div key={index} className='flex items-start mb-2'>
          <p>{highlightedSentence}</p>
        </div>
      );
    });
  };

  const description = t("description");
  return (
    <div
      className={`flex-1 flex flex-col md:flex-row items-start justify-between md:gap-5 w-full h-full overflow-y-auto ${
        theme === "dark" ? "bg-dark4" : "bg-light2"
      }`}
    >
      <div className='py-5 px-1 flex md:flex-col justify-start items-start md:items-center w-full md:max-w-[350px] md:self-stretch'>
        <Image
          src='/images/profile.jpg'
          width={1000}
          height={1000}
          className='rounded-full object-fill w-1/5 md:w-2/3 shadow-md shadow-slate-600'
          alt='Profile Image'
        />
        <div>
          <p
            className={`w-full md:p-0 pl-5 md:text-center font-bold mt-2 ${
              theme === "dark" ? "text-light2" : "text-dark1"
            }`}
          >
            {Config.information.title}
          </p>
          <div className='grid grid-cols-6 w-full'>
            <InfoRow
              theme={theme}
              field={t("name")}
              title={Config.information.name}
            />
            <InfoRow
              theme={theme}
              field={t("email")}
              title={Config.information.email}
              url={`mailto:${Config.information.email}`}
            />
            <InfoRow
              theme={theme}
              field={t("phone")}
              title={Config.information.phone}
              url={`tel:${Config.information.phone}`}
            />
            <InfoRow
              theme={theme}
              field={t("location")}
              title={Config.information.city + "/" + Config.information.country}
            />
            <InfoRow
              theme={theme}
              field={t("degree")}
              title={Config.information.degree}
            />
            {/* <InfoRow
              theme={theme}
              field={t("freelance")}
              title={
                Config.information.freelance
                  ? t("yes.freelance")
                  : t("no.freelance")
              }
            />
            <InfoRow
              theme={theme}
              field={t("remote")}
              title={
                Config.information.remote ? t("yes.remote") : t("no.remote")
              }
            /> */}
          </div>
          <div className='flex justify-center w-full items-end flex-1'>
            {Config.social.map((item) => {
              return (
                <Link key={item.id} href={item.url} target='_blank'>
                  <Icon
                    icon={item.icon}
                    fontSize={"2rem"}
                    className='text-dark1 hover:text-light1'
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div
        // style={{ maxHeight: "calc(100vh - 104px)" }}
        className={`description overflow-y-auto p-5 h-[calc(100vh-104px-224px)]  md:h-[calc(100vh-104px)] px-3 w-full self-stretch md:py-5 ${
          theme == "dark" ? "bg-dark5 text-light2" : "bg-light4 text-dark1"
        }`}
      >
        {getHighlightedText(description, highlightList)}
      </div>
    </div>
  );
};

export default About;

export const InfoRow = ({
  field,
  title,
  theme,
  url,
}: {
  field: string;
  title: string;
  theme: string;
  url?: string;
}) => {
  return (
    <>
      <p
        className={`px-5 md:py-2 col-span-6 md:flex hidden md:col-span-2 font-bold items-center ${
          theme === "dark" ? "text-light2" : "text-dark2"
        }`}
      >
        {field}
      </p>
      {url ? (
        <Link
          href={url}
          className={`px-5 md:py-2 col-span-6 md:col-span-4 break-words w-full  font-medium flex items-center ${
            theme === "dark" ? "text-light2" : "text-dark1"
          }`}
        >
          {title}
        </Link>
      ) : (
        <p
          className={`px-5 md:py-2 col-span-6 md:col-span-4 break-words w-full  font-medium flex items-center ${
            theme === "dark" ? "text-light2" : "text-dark1"
          }`}
        >
          {title}
        </p>
      )}
    </>
  );
};
