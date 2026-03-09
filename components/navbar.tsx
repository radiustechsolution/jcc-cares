"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiApps2Fill,
  RiListCheck,
  RiListCheck2,
  RiListCheck3,
  RiSave2Fill,
  RiSave3Fill,
  RiToolsFill,
} from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Avatar } from "@heroui/avatar";
import clsx from "clsx";
import { RiTeamFill } from "react-icons/ri";
import { VscFileSubmodule } from "react-icons/vsc";
import { AiFillTool } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
export const Navbar = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <RiApps2Fill size={15} />,
    },
    {
      label: "Teams",
      href: "/dashboard/teams",
      icon: <RiTeamFill size={15} />,
    },
    {
      label: "Reports",
      href: "/dashboard/reports",
      icon: <RiListCheck3 size={15} />,
    },
    {
      label: "Modules",
      href: "/dashboard/modules",
      icon: <RiSave3Fill size={15} />,
    },
    {
      label: "Tools",
      href: "/dashboard/tools",
      icon: <RiToolsFill size={15} />,
    },
  ];

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center bg-background justify-between px-5 py-1 border-b border-gray-300">
      {/* Left > SM */}
      <div className="hidden sm:flex items-center gap-1 md:gap-6">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "relative text-[13px] font-medium flex items-center gap-2 px-1 py-3 transition-colors",
                isActive ? "text-primary" : "text-gray-500"
              )}
            >
              {/* Icon */}
              <span
                className={clsx(
                  "text-lg transition-colors",
                  isActive ? "text-primary" : "text-gray-500"
                )}
              >
                {item.icon}
              </span>

              {/* Label */}
              <span>{item.label}</span>

              {/* Active bottom border */}
              {isActive && (
                <span className="absolute bottom-[-5px] left-0 right-0 h-[3px] bg-primary rounded-t-sm" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Left < SM menu*/}
      <div className="flex sm:hidden items-center gap-1">
        <IoIosMenu size={18} />
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className=" transition-colors"
          aria-label="Toggle theme"
        >
          {mounted && theme === "dark" ? (
            <MdLightMode size={18} />
          ) : (
            <MdDarkMode size={18} />
          )}
        </button>

        {/* Notifications */}
        <IoIosNotifications className="" size={20} />

        {/* Avatar */}
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          className="w-8 h-8 cursor-pointer"
          radius="sm"
        />
      </div>
    </div>
  );
};
