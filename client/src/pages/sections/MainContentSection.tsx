import { SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const MainContentSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Athletes", href: "#" },
    { label: "Games", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <header className="flex items-center justify-between px-10 py-3 border-b border-[#e5e8ea] w-full bg-[#1a1f24]">
      {/* Left side: Logo and Navigation */}
      <div className="flex items-center gap-8">
        {/* Logo/Brand */}
        <div className="flex items-center gap-4">
          <div className="w-4">
            <div className="w-4 h-4 bg-[url(/figmaAssets/vector---0-1.svg)] bg-[100%_100%]" />
          </div>
          <h1 className="text-lg font-bold text-white [font-family:'Lexend',Helvetica]">
            Athlete Spotlight
          </h1>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex gap-9">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="text-sm font-medium text-white [font-family:'Lexend',Helvetica] leading-[21px]"
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right side: SearchIcon and Profile */}
      <div className="flex items-center justify-end gap-8">
        {/* SearchIcon Bar */}
        <div className="min-w-40 max-w-64">
          <div className="flex items-center rounded-xl bg-[#283038]">
            <div className="flex items-center justify-center pl-4 rounded-l-xl">
              <SearchIcon className="h-6 w-6 text-[#9baaba]" />
            </div>
            <Input
              className="border-0 bg-transparent text-[#9baaba] text-base [font-family:'Lexend',Helvetica] focus-visible:ring-0 focus-visible:ring-offset-0 h-10 rounded-r-xl"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Notification Icon */}
        <div className="h-10 max-w-[480px] px-2.5 py-0 bg-[#283038] rounded-xl flex items-center justify-center">
          <div className="w-full h-full">
            <div className="w-full h-full bg-[url(/figmaAssets/vector---0-5.svg)] bg-[100%_100%]" />
          </div>
        </div>

        {/* User Profile */}
        <div className="w-10 h-10 rounded-[20px] [background:url(..//figmaAssets/depth-4--frame-2.png)_50%_50%_/_cover]" />
      </div>
    </header>
  );
};
