import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const LeaderboardSection = (): JSX.Element => {
  // Data for sport categories to enable mapping
  const sportCategories = [
    {
      id: 1,
      title: "Track and Field",
      description: "Explore more track and field athletes.",
      imageUrl: "..//figmaAssets/depth-7--frame-0-9.png",
    },
    {
      id: 2,
      title: "Basketball",
      description: "Discover basketball stars.",
      imageUrl: "..//figmaAssets/depth-7--frame-0-10.png",
    },
    {
      id: 3,
      title: "Swimming",
      description: "Dive into the world of swimming.",
      imageUrl: "..//figmaAssets/depth-7--frame-0-11.png",
    },
  ];

  return (
    <section className="flex w-full self-stretch">
      <div className="flex w-full items-start gap-3 p-4">
        {sportCategories.map((sport) => (
          <Card
            key={sport.id}
            className="flex flex-col min-w-40 items-start gap-4 flex-1 self-stretch rounded-lg border-0"
          >
            <div
              className="relative self-stretch w-full h-[289px] rounded-xl"
              style={{ background: `url(${sport.imageUrl}) 50% 50% / cover` }}
            />
            <CardContent className="flex flex-col items-start p-0 w-full">
              <h3 className="font-medium text-white text-base leading-6 self-stretch mt-[-1.00px] font-['Lexend',Helvetica] tracking-[0]">
                {sport.title}
              </h3>
              <p className="self-stretch mt-[-1.00px] font-['Lexend',Helvetica] font-normal text-[#9baaba] text-sm tracking-[0] leading-[21px]">
                {sport.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
