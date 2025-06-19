import React, { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CornerHighlightsSection = (): JSX.Element => {
  const [followed, setFollowed] = useState(false);
  // User data that can be easily modified or expanded
  const userData = {
    name: "Chloe Bennett",
    activity: "Swimming",
    profileImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80",
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
          variant={followed ? "default" : "outline"}
          className={`h-8 px-4 py-0 rounded-xl ${
            followed
              ? "bg-[#0c7ff2] text-white"
              : "bg-[#283038] text-white border-none"
          }`}
          onClick={() => setFollowed((v) => !v)}
        >
          <span className="text-sm font-medium font-['Lexend',Helvetica]">
            {followed ? "Following" : "Follow"}
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
