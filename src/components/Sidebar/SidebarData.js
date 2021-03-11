import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />

    /*subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />
      }
    ]*/
  },
  {
    title: "Login",
    path: "/login",
    icon: <BsIcons.BsPeopleCircle />
  },
  {
    title: "Cadatro",
    path: "/add",
    icon: <BsIcons.BsPencil />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: "Equipe",
    path: "/equipe",
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: "Artigos",
    path: "/artigos",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />

    /*subNav: [
      {
        title: "Reports",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav"
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav"
      },
      {
        title: "Reports 3",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />
      }
    ]*/
  },
  {
    title: "Suporte",
    path: "/suporte",
    icon: <IoIcons.IoMdHelpCircle />
  }
];
