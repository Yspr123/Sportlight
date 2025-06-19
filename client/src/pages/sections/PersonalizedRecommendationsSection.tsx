import React, { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const PersonalizedRecommendationsSection = (): JSX.Element => {
  const [followed, setFollowed] = useState(false);
  // User data that can be easily modified or expanded
  const userData = {
    name: "Emma Hayes",
    activity: "Track and Field",
    profileImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=100&q=80",
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
            <h3 className="font-medium text-white text-base leading-6 font-['Lexend',Helvetica] tracking-[0]">
              {userData.name}
            </h3>
            <p className="font-normal text-[#9baaba] text-sm leading-[21px] font-['Lexend',Helvetica] tracking-[0]">
              {userData.activity}
            </p>
          </div>
        </div>

        <Button
          variant={followed ? "default" : "outline"}
          className={`h-8 px-4 rounded-xl ${
            followed
              ? "bg-[#0c7ff2] text-white"
              : "bg-[#283038] text-white border-0"
          }`}
          onClick={() => setFollowed((v) => !v)}
        >
          <span className="font-['Lexend',Helvetica] font-medium text-sm">
            {followed ? "Following" : "Follow"}
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
