import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

import Link from "next/link";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { ModeToggle } from "./Mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import DownloadCv from "./DownloadCv";

const profileQuery = `*[_type == "profile"][0]{
  primaryImage{
    asset->{
      url
    }
  },
  cv{
    asset->{
      url
    }
  }
}
`;

function NavigationMenuItemLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md",
            className
          )}
          href={href}
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

async function Navigation() {
  const profileData = await client.fetch(profileQuery);

  const profileImageUrl = profileData?.primaryImage
    ? urlFor(profileData.primaryImage).url()
    : null;

  const handleDownload = () => {
    if (profileData?.cv?.asset?.url) {
      window.open(profileData.cv.asset.url, "_blank");
    }
  };
  return (
    <div className="flex flex-row items-center justify-between sm:justify-between py-8 max-w-5xl mx-auto relative z-[100] px-8">
      <div className="hidden lg:flex w-full justify-between">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row space-x-2 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-background ">
            <NavigationMenuItemLink
              className="flex items-center gap-x-2"
              href="/"
            >
              <Avatar>
                <AvatarImage src={profileImageUrl!} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Bernard Ochoa
            </NavigationMenuItemLink>
            <NavigationMenuItemLink href="/about">About</NavigationMenuItemLink>

            <NavigationMenuItemLink href="/projects">
              Projects
            </NavigationMenuItemLink>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-row space-x-4 items-center">
          <DownloadCv path={profileData?.cv?.asset?.url} />
          <ModeToggle />
        </div>
      </div>
      <div className="flex lg:hidden w-full"></div>
    </div>
  );
}

export default Navigation;
