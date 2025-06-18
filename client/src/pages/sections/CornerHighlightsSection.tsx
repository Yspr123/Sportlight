import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CornerHighlightsSection = (): JSX.Element => {
  // User data that can be easily modified or expanded
  const userData = {
    name: "Chloe Bennett",
    activity: "Swimming",
    profileImage: "..//figmaAssets/depth-6--frame-0-3.png",
  };

  return (
    <Card className="border-0 rounded-none bg-[#111416]">
      <CardContent className="flex items-center justify-between p-4 py-2 min-h-[72px]">
        <div className="flex items-center gap-4">
          <Avatar className="w-14 h-14 rounded-[28px]">
            <AvatarImage
              src={userData.profileImage}
              alt={`${userData.name}'s profile`}
              className="object-cover"
            />
          </Avatar>

          <div className="flex flex-col">
            <h3 className="font-medium text-base leading-6 text-white font-['Lexend',Helvetica]">
              {userData.name}
            </h3>
            <p className="text-sm leading-[21px] text-[#9baaba] font-normal font-['Lexend',Helvetica]">
              {userData.activity}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          className="h-8 px-4 py-0 bg-[#283038] text-white border-none rounded-xl hover:bg-[#3a4550]"
        >
          <span className="text-sm font-medium font-['Lexend',Helvetica]">
            Follow
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
