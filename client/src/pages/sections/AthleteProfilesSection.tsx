import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export const AthleteProfilesSection = (): JSX.Element => {
  return (
    <Card className="border-0 bg-transparent">
      <CardContent className="flex gap-3 p-4 items-start">
        <Avatar className="w-10 h-10 rounded-[20px]">
          <AvatarImage
            src="..//figmaAssets/depth-5--frame-0-1.png"
            alt="Lucas Davis"
          />
        </Avatar>

        <div className="flex flex-1 flex-col items-start">
          <div className="flex items-center gap-3 w-full">
            <div className="inline-flex flex-col items-start">
              <span className="font-bold text-white text-sm leading-[21px] [font-family:'Lexend',Helvetica]">
                Lucas Davis
              </span>
            </div>

            <div className="inline-flex flex-col items-start">
              <span className="font-normal text-[#9baaba] text-sm leading-[21px] [font-family:'Lexend',Helvetica]">
                2d
              </span>
            </div>
          </div>

          <div className="inline-flex flex-col items-start">
            <p className="font-normal text-white text-sm leading-[21px] [font-family:'Lexend',Helvetica]">
              Emma is an incredible athlete! Her speed is unmatched.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
