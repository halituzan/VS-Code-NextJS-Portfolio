import Config from "@/app/Configs/config";
import Image from "next/image";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
const { highlightList } = Config;
type Props = {};

const About = (props: Props) => {
  const { t } = useTranslation("profile");

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
          <span className='font-bold' key={wordIndex}>
            {word}
          </span>
        ) : (
          word
        );
      });

      return (
        <p key={index} className='mb-2'>
          {highlightedSentence}
        </p>
      );
    });
  };

  const description = t("description");
  return (
    <div className='flex-1 flex items-start justify-between p-5 gap-5 w-full h-full overflow-y-auto bg-slate-300'>
      <div className='image-and-info flex flex-col justify-start items-center max-w-[350px] self-stretch'>
        <Image
          src='/images/profile.jpg'
          width={1000}
          height={1000}
          className='rounded-full object-fill w-2/3 shadow-md shadow-slate-600'
          alt='Profile Image'
        />
        <p className='w-full text-center text-slate-900 font-bold mt-2'>
          {Config.information.title}
        </p>
        <div className='grid grid-cols-6 w-full'>
          <InfoRow field={t("name")} title={Config.information.name} />
          <InfoRow field={t("email")} title={Config.information.email} />
          <InfoRow field={t("phone")} title={Config.information.phone} />
          <InfoRow
            field={t("location")}
            title={Config.information.city + "/" + Config.information.country}
          />
          <InfoRow field={t("degree")} title={Config.information.degree} />
          <InfoRow
            field={t("freelance")}
            title={
              Config.information.freelance
                ? t("yes.freelance")
                : t("no.freelance")
            }
          />
          <InfoRow
            field={t("remote")}
            title={Config.information.remote ? t("yes.remote") : t("no.remote")}
          />
        </div>
      </div>
      <div className='description flex-1 px-3 self-stretch text-slate-900'>
        {getHighlightedText(description, highlightList)}
      </div>
    </div>
  );
};

export default About;

export const InfoRow = ({ field, title }: any) => {
  return (
    <>
      <p className='px-5 py-2 col-span-2 text-slate-900 font-bold flex items-center'>
        {field}
      </p>
      <p className='px-5 py-2 col-span-4 break-words w-full text-slate-900 font-medium flex items-center'>
        {title}
      </p>
    </>
  );
};
