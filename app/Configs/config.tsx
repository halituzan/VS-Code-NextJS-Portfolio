const Config = {
  mode: "light", //* Default Mode
  highlightList: [
    //* Write the words you want to emphasize in the description in the About You section using lowercase letters.
    "javascript",
    "reactjs",
    "nextjs",
    "mongodb",
    "html",
    "css",
    "tailwindcss",
    "bootstrap",
    "materialui",
    "nextui",
    "typescript",
    "redux",
    "redux-toolkit",
    "e-commerce",
    "mantin",
    "scss",
  ],
  skills: {
    software: [
      {
        id: 1,
        name: "Typescript",
        icon: "skill-icons:typescript",
      },
      {
        id: 2,
        name: "Javascript",
        icon: "skill-icons:javascript",
      },
      {
        id: 3,
        name: "HTML5",
        icon: "skill-icons:html",
      },
      {
        id: 4,
        name: "CSS3",
        icon: "skill-icons:css",
      },
      {
        id: 5,
        name: "ReactJs",
        icon: "skill-icons:react-dark",
      },
      {
        id: 6,
        name: "NextJs",
        icon: "skill-icons:nextjs-dark",
      },
      {
        id: 7,
        name: "NodeJs",
        icon: "skill-icons:nodejs-dark",
      },
      {
        id: 8,
        name: "MongoDB",
        icon: "skill-icons:mongodb",
      },
      {
        id: 9,
        name: "Git",
        icon: "skill-icons:git",
      },
    ],
    ui: [
      {
        id: 1,
        name: "Material UI",
        icon: "skill-icons:materialui-dark",
      },

      {
        id: 2,
        name: "Mantine",
        icon: "logos:mantine-icon",
      },
      {
        id: 3,
        name: "TwilwindCss",
        icon: "skill-icons:tailwindcss-dark",
      },
      {
        id: 4,
        name: "Bootstrap",
        icon: "skill-icons:bootstrap",
      },
    ],
    programs: [
      {
        id: 1,
        name: "Figma",
        icon: "skill-icons:figma-dark",
      },
      {
        id: 2,
        name: "Adobe XD",
        icon: "skill-icons:xd",
      },
      {
        id: 3,
        name: "Adobe Illustrator",
        icon: "skill-icons:illustrator",
      },
      {
        id: 4,
        name: "Adobe PhotoShop",
        icon: "skill-icons:photoshop",
      },
    ],
  },
  information: {
    name: "Halit Uzan",
    email: "halit.uzan@gmail.com",
    phone: "+905301142548",
    country: "Türkiye",
    city: "İstanbul",
    degree: "Junior",
    freelance: true,
    remote: true,
    birthDay: "28 Şubat 1992",
    title: "Full-Stack Web Developer",
  },
  social: [
    {
      id: "github",
      name: "Github",
      icon: "mdi:github",
      url: "https://github.com/halituzan",
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: "mdi:twitter",
      url: "https://x.com/uzandev",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: "mdi:linkedin",
      url: "https://www.linkedin.com/in/halituzan/",
    },
    {
      id: "stackoverflow",
      name: "StackoverFlow",
      icon: "mdi:stackoverflow",
      url: "https://stackoverflow.com/users/12782922/halit-uzan",
    },
    // {
    //   id: "codewars",
    //   name: "Codewars",
    //   icon: "cib:codewars",
    //   url: "https://www.codewars.com/users/halituzan",
    // },
  ],
  workHistories: [
    {
      id: 1,
      job: "FrontEnd Developer (Intern)",
      company: "ETurnsoft",
      url: "https://www.linkedin.com/company/eturnsoft/about/",
      companyLocation: "Türkiye / İstanbul",
      workStart: "2021",
      workEnd: "2022",
      description: "description1",
      technologies: [
        "Javascript",
        "HTML",
        "CSS",
        "ReactJs",
        "NodeJs",
        "MongoDB",
        "Bootstrap",
      ],
      project: [],
    },
    {
      id: 2,
      job: "FrontEnd Developer",
      company: "Codelisa Teknoloji",
      url: "https://www.codelisa.com.tr/",
      companyLocation: "Türkiye / İstanbul",
      workStart: "2022",
      workEnd: "Now",
      description: "description2",
      technologies: [
        " Typescript",
        " Javascript",
        " HTML",
        " CSS",
        " ReactJs",
        " NextJs(SSR)",
        " TailwindCss",
        " MaterialUI",
        " Mantine",
        " Micro-Frontend",
      ],
      project: [
        {
          id: 1,
          title: "Tiktak",
          technologies: ["NextJs", "MaterialUI", "Vuexy Template"],
          icons: [
            "skill-icons:nextjs-dark",
            "skill-icons:materialui-dark",
            "flat-color-icons:template",
          ],
          img: "/projects/tiktak.jpg",
        },
        {
          id: 2,
          title: "GOUP",
          technologies: ["ReactJS", "Bootstrap", "Vuexy Template"],
          icons: [
            "skill-icons:react-dark",
            "skill-icons:bootstrap",
            "flat-color-icons:template",
          ],
          img: "/projects/goup.jpg",
        },
        {
          id: 3,
          title: "Muhakemat",
          technologies: [
            "ReactJS",
            "Mantine",
            "Styled Component",
            "Micro-Frontend",
          ],
          icons: [
            "skill-icons:react-dark",
            "logos:mantine-icon",
            "skill-icons:styledcomponents",
            "carbon:microservices-1",
          ],
          img: "/projects/muhakemat.jpg",
        },
        {
          id: 4,
          title: "Talentswide",
          technologies: ["NextJs(SSR)", "Figma Design", "Tailwindcss"],
          icons: [
            "skill-icons:nextjs-dark",
            "skill-icons:figma-dark",
            "skill-icons:tailwindcss-dark",
          ],
          img: "/projects/talentswide.jpg",
        },
      ],
    },
  ],
  portfolio: [
    {
      id: 1,
      title: "Entegrenity",
      technologies: ["NextJs", "Tailwindcss", "Javascript", "MongoDb"],
      icons: [
        "skill-icons:nextjs-dark",
        "skill-icons:tailwindcss-dark",
        "skill-icons:javascript",
        "skill-icons:mongodb",
      ],
      url: {
        repo: false,
        live: "https://www.entegrenity.com/",
      },
      description:
        "Pazaryerleri API servislerini kullanarak e-ticaret işletmelerinin ürün yönetimini kolaylaştıran IMS sistemidir. Bu yazılımın amacı, eticaret işletmelerinin ürünlerini gruplayarak tek bir platformdan tüm ürünlerinin stok ve fiyat bilgilerini günvellemesidir.",
      img: "/projects/entegrenity.jpg",
    },
    {
      id: 2,
      title: "Trendyol Barcode Finder",
      technologies: ["HTML", "Javascript", "Bootstrap"],
      icons: [
        "skill-icons:html",
        "skill-icons:javascript",
        "skill-icons:bootstrap",
      ],
      url: {
        repo: "https://github.com/halituzan/Trendyol-New-Barkod-Finder",
        live: "https://chromewebstore.google.com/detail/trendyol-barkod-finder/mlpdemjleelebmdmhhnklcmhooniclpd",
      },
      description:
        "Trendyol'da listelenen ürünlerin barkodlarını bulmayı kolaylaştıran Google Chrome eklentisidir. Versiyon 2 olarak geliştirilmiş bir üst versiyonudur. Eski versiyonu için Trendyol Barcode eklentisi incelenebilir.",
      img: "/projects/barcode-finder.jpg",
    },
    {
      id: 3,
      title: "Trendyol Barcode Finder",
      technologies: ["HTML", "Javascript", "Bootstrap"],
      icons: [
        "skill-icons:html",
        "skill-icons:javascript",
        "skill-icons:bootstrap",
      ],
      url: {
        repo: "https://github.com/halituzan/Trendyol-Barcode-Old-Version",
        live: "https://chromewebstore.google.com/detail/trendyol-barcode/bialioiclfnecalfpkdaijplbchfhoee",
      },
      description:
        "Trendyol'da listelenen ürünlerin barkodlarını bulmayı kolaylaştıran Google Chrome eklentisidir. Versiyon 1 olarak geliştirilmiştir. Yeni versiyonu için Trendyol Barcode Finder eklentisi incelenebilir.",
      img: "/projects/barcode.jpg",
    },
    {
      id: 4,
      title: "TDK All API Package",
      technologies: ["NPM", "Javascript"],
      icons: ["skill-icons:npm-dark", "skill-icons:javascript"],
      url: {
        repo: "https://github.com/halituzan/tdk-all-api",
        live: "https://www.npmjs.com/package/tdk-all-api",
      },
      description:
        "Türk Dil Kurumu API larını kullanarak istenilen kelimenin anlamlarını JSON response olarak getiren bir npm paketi.",
      img: "/projects/tdk.jpg",
    },
    {
      id: 5,
      title: "LingoManiac Word Game",
      technologies: ["NextJs", "Tailwindcss", "Typescript", "MongoDB"],
      icons: [
        "skill-icons:nextjs-dark",
        "skill-icons:tailwindcss-dark",
        "skill-icons:typescript",
        "skill-icons:mongodb",
      ],
      url: {
        repo: "https://github.com/halituzan/lingomania",
        live: "https://lingomania.vercel.app/",
      },
      description:
        "Belirli bir kelimeyi bulmaya çalıştığınız ve sadece bulmaya çalıştığınız kelimenin baş harfini kullanarak denemeler yapabildiğiniz bir kelime oyunu. Mobil uygulaması için testlerin yapıldığı bir ara web yazılımı.",
      img: "/projects/lingo-web.jpg",
    },
  ],
};
export default Config;
