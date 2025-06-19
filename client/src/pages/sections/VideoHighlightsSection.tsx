import React, { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const VideoHighlightsSection = (): JSX.Element => {
  const [followed, setFollowed] = useState(false);
  return (
    <Card className="flex items-center justify-between px-4 py-2 w-full bg-[#111416] rounded-none border-none">
      <CardContent className="flex items-center justify-between w-full p-0">
        <div className="flex items-center gap-4">
          <Avatar className="w-14 h-14 rounded-[28px]">
            <AvatarImage
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=100&q=80"
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
          variant={followed ? "default" : "outline"}
          className={`h-8 px-4 py-0 rounded-xl ${
            followed
              ? "bg-[#0c7ff2] text-white"
              : "bg-[#283038] text-white border-none"
          }`}
          onClick={() => setFollowed((v) => !v)}
        >
          <span className="font-medium text-sm text-center leading-[21px] font-['Lexend',Helvetica]">
            {followed ? "Following" : "Follow"}
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
