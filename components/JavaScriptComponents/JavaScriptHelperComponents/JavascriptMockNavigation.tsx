"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JavaScriptMockInterface } from "@/utils/types/types";
import { JavaScriptMockData } from "@/utils/data/javascriptData/JavaScriptMockData";

const JavaScriptMockNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-3">
      {JavaScriptMockData.map((question: JavaScriptMockInterface, index) => {
        const isActive = pathname.includes(question.link);

        return (
          <Link
            href={`/JavaScript/${question.link}`}
            key={index}
            className={`${
              isActive ? "text-indigo-600 font-semibold" : "text-gray-300"
            } hover:text-indigo-500 transition-colors`}
          >
           {index+1}.  {question.question}
          </Link>
        );
      })}
    </div>
  );
};

export default JavaScriptMockNavigation;
