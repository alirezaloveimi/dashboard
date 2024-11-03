// type
import { LoginInputsType, RegisterInputsType } from "./types";

import { ApexOptions } from "apexcharts";

// icons
import { icons } from "./icons";

type CharTypes = {
  options: ApexOptions;
  series: { name: string; data: number[] }[];
};

export const registerInputs: RegisterInputsType = [
  {
    id: crypto.randomUUID(),
    placeholder: "User Name",
    labelText: "User Name",
    type: "text",
    name: "userName",
  },
  {
    id: crypto.randomUUID(),
    placeholder: "Email",
    labelText: "Email",
    type: "text",
    name: "email",
  },
  {
    id: crypto.randomUUID(),
    placeholder: "Password",
    labelText: "Password",
    type: "password",
    name: "password",
  },
  {
    id: crypto.randomUUID(),
    placeholder: "Confirm Password",
    labelText: "Confirm Password",
    type: "password",
    name: "confirmPassword",
  },
];

export const loginInputs: LoginInputsType = [
  {
    id: crypto.randomUUID(),
    placeholder: "Email",
    labelText: "Email",
    type: "text",
    name: "email",
  },
  {
    id: crypto.randomUUID(),
    placeholder: "Password",
    labelText: "Password",
    type: "password",
    name: "password",
  },
];

export const sidebarItems = [
  { id: 1, title: "Dashboard", to: "/dashboard", icon: icons.home },
  { id: 2, title: "Users", to: "/users", icon: icons.chart },
  { id: 3, title: "Billing", to: "/billing", icon: icons.bankCard },
];

export const transactions = [
  { id: 1, title: "Today Money", icon: icons.wallet, price: 53000 },
  { id: 2, title: "Today's Users", icon: icons.global, price: 2300 },
  { id: 3, title: "New Clients", icon: icons.document, price: 3462 },
  { id: 4, title: "Total Sales", icon: icons.shoppingCart, price: 103430 },
];

export const salesChart: CharTypes = {
  options: {
    legend: {
      show: false,
    },

    markers: {
      colors: ["#0075ff", "#2cd9ff"],
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#0075ff", "#2cd9ff"],
    stroke: {
      curve: "smooth",
      lineCap: "butt",
      width: 4,
      colors: ["#0075ff", "#2cd9ff"],
    },
    theme: {
      mode: "dark",
    },
    grid: {
      strokeDashArray: 6,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    fill: {
      colors: ["#0075ff", "#2cd9ff"],
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.2,
        opacityFrom: 0.6,
        opacityTo: 0.3,
        stops: [80, 90, 70],
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: "#a0aec0",
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#a0aec0",
        },
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          xaxis: {
            labels: {
              show: false,
            },
          },
        },
      },
    ],
  },

  series: [
    {
      name: "Mobile Apps",
      data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
    },
    {
      name: "Website",
      data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
    },
  ],
};

export const usersChart: CharTypes = {
  series: [
    {
      name: "Sales",
      data: [330, 240, 110, 300, 490, 350, 270, 130, 425],
    },
  ],

  options: {
    colors: ["#dadbdf"],
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    theme: {
      mode: "dark",
    },
    chart: {
      background: "#070c27",
      toolbar: {
        show: false,
      },
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 1,
        columnWidth: "10%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        show: false,
      },
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
      },
    },
  },
};

export const websiteActivities = [
  {
    id: 1,
    title: "Users",
    count: 32984,
    progress: 40,
    icon: icons.walletOutline,
  },
  { id: 2, title: "Clicks", count: 6820000, progress: 85, icon: icons.rocket },
  {
    id: 3,
    title: "Sales",
    count: 5240,
    progress: 69,
    icon: icons.shoppingCart,
  },
  {
    id: 4,
    title: "Items",
    count: 320,
    progress: 32,
    icon: icons.wrenchScrewdriver,
  },
];

export const footerItems = [
  { id: 1, title: "Marketplace" },
  { id: 2, title: "Blog" },
  { id: 3, title: "License" },
];

export const projectsTableItems = [
  {
    id: 1,
    companies: "Chakra Vision UI Version",
    budget: 1399,
    completion: 25,
    icon: icons.adobe,
    iconColor: "#470137",
  },
  {
    id: 2,
    companies: "Add Progress Track",
    budget: 3000,
    completion: 25,
    icon: icons.telegram,
    iconColor: "#2684ff",
  },
  {
    id: 3,
    companies: "Fix Platform Errors",
    budget: 0,
    completion: 13,
    icon: icons.opera,
    iconColor: "#dc2626",
  },
  {
    id: 4,
    companies: "Launch our Mobile App",
    budget: 22986,
    completion: 81,
    icon: icons.spotify,
    iconColor: "#2ebd59",
  },
  {
    id: 5,
    companies: "Redesign New Online Shop",
    budget: 90000,
    completion: 50,
    icon: icons.galleon,
    iconColor: "#dc395f",
  },
];

export const ordersOverview = [
  {
    id: 1,
    title: "$2400, Design changes",
    time: "22 DEC 7:20 PM",
    icon: icons.notification,
    iconColor: "#0075ff",
  },
  {
    id: 2,
    title: "New order #1832412",
    time: "21 DEC 11 PM",
    icon: icons.html,
    iconColor: "#e31a1a",
  },
  {
    id: 3,
    title: "Server payments for April",
    time: "21 DEC 9:34 PM",
    icon: icons.shoppingCart,
    iconColor: "#4299e1",
  },
  {
    id: 4,
    title: "$2400, Design changes",
    time: "22 DEC 7:20 PM",
    icon: icons.dropbox,
    iconColor: "#9f7aea",
  },
];

export const invoicesItems = [
  { id: 1, date: "March, 01, 2020", code: "#MS-57384", price: 189 },
  { id: 2, date: "December, 21, 2013", code: "#MS-127512", price: 200 },
  { id: 3, date: "October, 05, 1991", code: "#MS-98234", price: 3912 },
  { id: 4, date: "March, 15, 2018", code: "#MS-415646", price: 4232 },
  { id: 5, date: "May, 22, 2002", code: "#MS-63452", price: 67563 },
];

export const billingInformations = [
  {
    id: 1,
    name: "Oliver Liam",
    companyName: "Stone Tech Zone",
    email: "OliverLiam@gmail.com",
    VATNumber: "FRB1235476",
  },
  {
    id: 2,
    name: "Lucas Harper",
    companyName: "Snapp",
    email: "LucasHarper@gmail.com",
    VATNumber: "BCXZ743341",
  },
  {
    id: 3,
    name: "Ethan James",
    companyName: "Digikala",
    email: "EthanJames@gmail.com",
    VATNumber: "QWE1235476",
  },
];
