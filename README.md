# VS Code Template NextJS Portfolio

It is a software developer portfolio site designed based on the VS Code editor. Created with Next.js 14.2.3 Version. Information is added statically inside. There is no database connection.

## 1. Language Configuration
Multi-language configuration has been added to the theme with i18n. There are two different languages available: Turkish and English. In addition to these languages, you can also add your own languages. The infrastructure for RTL languages such as Arabic is not currently available. However, you can also do your own language optimization by forking. I am waiting for your support for RTL languages.

Configuring the language configuration is very easy. While you can separate language files for each of your components, you can also provide this control from a single file.

### Language Files

You should keep your language files under public/locales. Like the "en" folder for English and the "tr" folder for Turkish. Language files must be in JSON format, but you can shape them according to your wishes. It is set like this by default.

Example:
```
// public/locales/tr/skills.json
{
    "title.software": "Yazılım Teknolojileri",
    "title.ui": "UI ve CSS Kütüphaneleri",
    "title.design": "Tasarım Programları"
}
// public/locales/en/skills.json
{
    "title.software": "Software Technologies",
    "title.ui": "UI And CSS Libraries",
    "title.design": "Design Programs"
}

```

Configuration i18n: In order to use your language files throughout the project, you need to configure your i18n.tsx file.
```
// app/Configs/i18n.tsx
import trSkills from "../../public/locales/tr/skills.json";
import enSkills from "../../public/locales/en/skills.json";

const defaultLang = "tr";
const resources = {
  tr: {skills: trSkills},
  en: {skills: enSkills}
};
const initLanguage = () => {
  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: window.localStorage.getItem("lng") ?? defaultLang,
    fallbackLng: window.localStorage.getItem("lng") ?? defaultLang,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
};
export default { initLanguage };
```

After completing the configuration, you can use the code example below to use throughout the project.

```
// app/Components/Main/Pages/Skills.tsx

// Other imports...
import { useTranslation } from "react-i18next";

const Skills = (props: Props) => {

const { t } = useTranslation("skills");

return (
    <div className='w-full p-5 h-[calc(100vh-107px)] overflow-auto'>
    <h2>{t("title.software")}</h2>

    // Other codes...
)}

export default Skills;
```

## 2. Configuration of General Information

I tried to control this information from a single area by keeping some basic information in the Config file, and I tried to control this information dynamically from a single point by adding it to the language configuration.

I plan to increase the dynamism by inserting this information into the database structure during version updates, but for now, this information should be provided statically.

### Config.tsx Configuration

Various information is written in our config file. The information you write in the relevant fields in this file goes to the places where it should be among the codes. Various options are also presented in this file.

Via this file:
- You can determine which is the default mode of your site.
- On the About page, you can let us know which keywords should be highlighted in your description section. 
- For the Skills page, you can categorize your skills according to which field you have and give them the icons you want. For icons you should use the [Iconify](https://icon-sets.iconify.design/) Library.
- You must add information about yourself in the Information field.
- You can add your social media links from the social area.
- You can add your work history from the workHistory field. It's important to stick to the template here. If you want to do more customization. You will need to make changes to the *app/Components/Main/Pages/WorkHistory.tsx* file.
- You can add the projects in your portfolio from the portfolio field. It's important to stick to the template here. If you want to do more customization. You will need to make changes to the *app/Components/Main/Pages/Portfolio.tsx* file.

## 3. Color Configuration

For the color scheme, you can specify the colors for dark mode and light mode. You should use these codes and the color scheme in the *tailwind.config.ts* file. 6 colors were selected for dark mode and 6 colors for light mode. The selected codes were taken from the tailwindcss color scheme, but you can add any color codes you want here. The theme has slate codes by default.

Sample code template:

```
// tailwind.config.ts
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark1: "#020617", // slate-950
        dark2: "#0f172a", // slate-900
        dark3: "#1e293b", // slate-800
        dark4: "#334155", // slate-700
        dark5: "#475569", // slate-600
        dark6: "#64748b", // slate-500
        light1: "#cbd5e1", // slate-400
        light2: "#e2e8f0", // slate-300
        light3: "#e2e8f0", // slate-200
        light4: "#f1f5f9", // slate-100
        light5: "#f8fafc", // slate-50
        light6: "#ffffff", // white
      },
    },
  },
  plugins: [],
};
export default config;
```

## 4. Wakatime Badge
 
If you want your [Wakatime](https://wakatime.com/) working hours to be visible, you must add your wakatime api key to your .env file. The env.example file was created for this.
```
// .env
NEXT_PUBLIC_WAKATIME_API_KEY=YOUR_WAKATIME_API_KEY
```
For social media badges in the footer component, you must manually change them within the component.
path: *app/Layout/Footer.tsx*
