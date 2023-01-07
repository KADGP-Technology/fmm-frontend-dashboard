// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  // UilUsersAlt,
  UilPackage,
  UilChart,
  UilSetting,
  UilDesktop,
  UilPaintTool,
  UilUserExclamation,
  UilTicket,
  UilSignOutAlt
  // UilSignOutAlt,
} from "@iconscout/react-unicons";


// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";



// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Inbox",
  },
  {
    // icon: UilUsersAlt,
    icon: UilSetting,
    heading: "Business Leads",
  },
  {
    // icon: UilPackage,
    icon: UilDesktop,
    heading: 'Manage Booking'
  },
  {
    icon: UilPackage,
    heading: 'Personal Details'
  },
  {
    icon: UilTicket,
    heading: 'Professional Details'
  },
  {
    icon: UilPaintTool,
    heading: 'Promotional Tools'
  },
  {
    icon: UilChart,
    heading: 'Membership'
  },
  {
    // icon: UilChart,
    icon:UilUserExclamation,
    heading: 'Support'
  },
  {
    icon: UilSignOutAlt,
    heading: 'LogOut'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Bookings",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "4585",
    png: UilUsdSquare,
    series: [
      {
        name: "Total Bookings",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Profile Views",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "4585",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Profile Views",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Days Left",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "004",
    png: UilClipboardAlt,
    series: [
      {
        name: "Days Left",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "No.of Favourites",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 60,
    value: "4875",
    png: UilClipboardAlt,
    series: [
      {
        name: "No.of Favourites",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];


