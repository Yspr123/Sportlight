import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const MainFrameSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="bg-transparent border-0 shadow-none">
        <CardContent className="p-4">
          <div className="flex flex-col gap-3 max-w-[372px]">
            <h2 className="text-[32px] font-bold text-white leading-10 [font-family:'Lexend',Helvetica] tracking-[0]">
              Athlete Spotlight
            </h2>
            <p className="text-sm font-normal text-[#9baaba] [font-family:'Lexend',Helvetica] tracking-[0] leading-[21px]">
              Discover the stories and stats of your favorite athletes.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
