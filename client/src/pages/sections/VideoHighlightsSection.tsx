import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const VideoHighlightsSection = (): JSX.Element => {
  return (
    <Card className="flex items-center justify-between px-4 py-2 w-full bg-[#111416] rounded-none border-none">
      <CardContent className="flex items-center justify-between w-full p-0">
        <div className="flex items-center gap-4">
          <Avatar className="w-14 h-14 rounded-[28px]">
            <AvatarImage
              src="..//figmaAssets/depth-6--frame-0-2.png"
              alt="Liam Carter"
            />
          </Avatar>

          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-col items-start">
              <p className="font-medium text-white text-base leading-6 font-['Lexend',Helvetica]">
                Liam Carter
              </p>
            </div>

            <div className="flex flex-col items-start">
              <p className="font-normal text-[#9baaba] text-sm leading-[21px] font-['Lexend',Helvetica]">
                Basketball
              </p>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="h-8 px-4 py-0 bg-[#283038] text-white hover:bg-[#3a4550] hover:text-white border-none rounded-xl"
        >
          <span className="font-medium text-sm text-center leading-[21px] font-['Lexend',Helvetica]">
            Follow
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
