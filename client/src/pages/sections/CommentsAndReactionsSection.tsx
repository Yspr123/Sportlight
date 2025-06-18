import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CommentsAndReactionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col p-4 w-full">
      <Card className="flex overflow-hidden bg-[#1c2126] rounded-xl shadow-[0px_0px_4px_#0000001a]">
        <div className="relative flex-1 h-64 rounded-xl [background:url(..//figmaAssets/depth-6--frame-0.png)_50%_50%_/_cover]" />

        <CardContent className="flex flex-col min-w-72 items-start justify-center gap-1 p-4 flex-1">
          <div className="w-full">
            <p className="font-['Lexend',Helvetica] font-normal text-[#9baaba] text-sm leading-[21px]">
              Game
            </p>
          </div>

          <div className="w-full">
            <h3 className="font-['Lexend',Helvetica] font-bold text-white text-lg leading-[23px]">
              Choose Your Champion
            </h3>
          </div>

          <div className="flex items-end justify-between w-full">
            <div className="flex-col w-[344px]">
              <p className="font-['Lexend',Helvetica] font-normal text-[#9baaba] text-base leading-6">
                Select your favorite athlete and see how they stack up against
                the competition. Track their stats and achievements in
                real-time.
              </p>
            </div>

            <Button className="h-8 px-4 py-0 bg-[#0c7ff2] rounded-xl font-['Lexend',Helvetica] font-medium text-white text-sm">
              Play Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
