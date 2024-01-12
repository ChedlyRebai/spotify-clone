"use client";

import { Song } from "@/types";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import Library from "./Library";
import SideBarItem from "./SideBarItem";

type SidebarProps = {
  children: React.ReactNode;
  songs:Song[]
};

const Sidebar = ({ children,songs }: SidebarProps) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathName !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        href: "/search",
        active: pathName === "/search",
      },
    ],
    [pathName]
  );
  return (
    <div className="flex h-full">
      <div
        className="hidden
        md:flex
        flex-col
        gap-y-2
        bg-black
        h-full
        w-[300px]
        p-2
      "
      >
        <Box>
          <div className="flex  px-5 py-4 flex-col gap-y-4">
            {routes.map((route, index) => (
              <SideBarItem key={index} {...route} />
            ))}
          </div>
        </Box>

        <Box className="overflow-y-auto h-full">
          <Library songs={songs} />
        </Box>
      </div>

      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
