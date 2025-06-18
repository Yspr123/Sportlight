import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ContentWrapperSection = (): JSX.Element => {
  // Data for sports news cards
  const sportsCards = [
    {
      id: 1,
      image: "..//figmaAssets/depth-7--frame-0.png",
      title: "Record-Breaking Performance",
      description: "Emma Hayes sets a new world record in the 100m sprint.",
    },
    {
      id: 2,
      image: "..//figmaAssets/depth-7--frame-0-1.png",
      title: "Championship Victory",
      description:
        "Liam Carter leads his team to victory in the national basketball championship.",
    },
    {
      id: 3,
      image: "..//figmaAssets/depth-7--frame-0-2.png",
      title: "Athlete of the Year",
      description:
        "Chloe Bennett is awarded Athlete of the Year for her outstanding achievements.",
    },
  ];

  return (
    <div className="flex w-full items-start">
      <div className="flex items-start gap-3 p-4 flex-1">
        {sportsCards.map((card) => (
          <Card
            key={card.id}
            className="flex flex-col min-w-60 items-start gap-4 flex-1 rounded-lg border-0"
          >
            <div
              className="relative w-full h-[169px] rounded-xl"
              style={{ background: `url(${card.image}) 50% 50% / cover` }}
            />
            <CardContent className="flex flex-col items-start p-0 w-full">
              <h3 className="font-medium text-white text-base leading-6 w-full font-['Lexend',Helvetica]">
                {card.title}
              </h3>
              <p className="font-normal text-[#9baaba] text-sm leading-[21px] w-full font-['Lexend',Helvetica]">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
