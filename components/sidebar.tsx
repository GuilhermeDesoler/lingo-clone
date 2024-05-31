import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton,
} from "@clerk/nextjs"
import { Loader } from "lucide-react";

type Props = {
  className?: string;
}

type Icon = {
  label: string;
  icon: string;
  href: string;
}

const buttons: Icon[] = [
  {
    label: "Learn",
    icon: "learn",
    href: "/learn",
  },
  {
    label: "Leaderboard",
    icon: "leaderboard",
    href: "/leaderboard",
  },
  {
    label: "Quests",
    icon: "quests",
    href: "/quests",
  },
  {
    label: "Shop",
    icon: "shop",
    href: "/shop",
  },
];

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={
        cn(
          "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
          className,
        )}
      >
        <Link href="/learn">
          <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
            <Image src="/mascot.svg" height={40} width={40} alt="Mascot"/>
            <h1 className="text-2xl fontextrabold text-green-600 tracking-wide">
                Lingo
            </h1>
          </div>
        </Link>
        <div className="flex flex-col gap-y-2 flex-1">
          {buttons.map((button) => (
            <SidebarItem
              key={button.label}
              label={button.label}
              icon={button.icon}
              href={button.href}
            />
          ))}
        </div>
        <div className="p-4">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/"/>
          </ClerkLoaded>
        </div>
    </div>
  );
}
