"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import IconCustom from "./Icon";
import { Bug, GitFork, SquareCode, Star } from "lucide-react";
import { Button } from "./button";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    description: string;
    url: string;
    stars: number;
    forks: number;
    issues: number;
    mainLanguage: string;
    languages: Record<string, number>;
    updatedAt: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="p-1 flex-col gap-2">
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>

            <div className="container flex flex-col gap-2 mt-auto">
              <div className="flex flex-wrap gap-2">
                {Object.keys(item.languages).map((lang) => (
                  <IconCustom key={lang} name={lang.toLowerCase()} size={25} />
                ))}
              </div>
              <div className="flex gap-2 items-center justify-between">
                <Button
                  onClick={() => window.open(item.url, "_blank")}
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <SquareCode size={16} />
                  <span className=" text-sm">View on GitHub</span>
                </Button>
                <div className="flex">
                  <span className="flex items-center gap-0.5">
                    <Star size={16} /> {item.stars}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <GitFork size={16} /> {item.forks}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <Bug size={16} /> {item.issues}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden dark:bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "dark:text-zinc-100 font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
