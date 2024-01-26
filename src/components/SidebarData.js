import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
    {
        title: "Branch Mgmt",
        path: "/branch-mgmt",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Adjust Branch",
                path: "/branchMgmt/adjust-branch",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Accounts",
                path: "/branch-mgmt/accounts",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Inventory Mgmt",
        path: "/inventory-mgmt",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Products",
                path: "/inventory-mgmt/products",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Suppilers",
                path: "/inventory-mgmt/suppliers",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Good Receive",
                path: "/inventory-mgmt/good-receive",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Stock Balance",
                path: "/inventory-mgmt/stock-balance",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Stock Transfer",
                path: "/inventory-mgmt/stock-transfer",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Stock Return",
                path: "/inventory-mgmt/stock-return",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Check Price",
                path: "/inventory-mgmt/check-price",
                icon: <IoIcons.IoIosPaper />,
                
            }
        ],
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Billing",
        path: "/billing",
        icon: <FaIcons.FaEnvelopeOpenText />,
 
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Sales",
                path: "/billing/sale",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Work List",
                path: "/billing/work-list",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Online Orders",
        path: "/online-orders",
        icon: <IoIcons.IoMdHelpCircle />,
    },
    {
        title: "Web Mgmt",
        path: "/web-mgmt",
        icon: <IoIcons.IoMdHelpCircle />,
    }, 
    {
        title: "Reporting",
        path: "/reporting",
        icon: <IoIcons.IoMdHelpCircle />,
    },
];