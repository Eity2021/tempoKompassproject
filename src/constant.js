export const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },

  {
    name: "Solutions",


    subRoutes: [
      {
        name: "Kompass Connect",
        link: "appointment",
      },

      {
        name: "Kompass Lobby",
        link: "lobby",
      },
      {
        name: "Kompass Teams  ",
        // link: "payroll",

        subMenus: [
          {
            name: "HR and Payroll",
            link: "payroll",
          },
          {
            name: "Engagement Platform (Coming Soon)",
            // link: "*",
          },
        ],
      },
    ],
  },

  {
    name: "Pricing",
    link: "/pricing",
  },

  {
    name: "Contact Us",
    link: "/contact",
  },
];
