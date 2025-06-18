import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const AchievementHighlightsSection = (): JSX.Element => {
  // Data for achievement cards
  const achievements = [
    {
      event: "100m Sprint",
      result: "10.49s",
    },
    {
      event: "200m Sprint",
      result: "21.80s",
    },
    {
      event: "4x100m Relay",
      result: "42.50s",
    },
  ];

  return (
    <section className="flex flex-wrap items-start gap-4 p-4 w-full">
      {achievements.map((achievement, index) => (
        <Card
          key={index}
          className="flex-1 min-w-[158px] border border-[#3a4754] rounded-xl bg-transparent"
        >
          <CardContent className="flex flex-col items-start gap-2 p-6">
            <div className="w-full">
              <h3 className="[font-family:'Lexend',Helvetica] font-medium text-white text-base leading-6">
                {achievement.event}
              </h3>
            </div>
            <div className="w-full">
              <p className="[font-family:'Lexend',Helvetica] font-bold text-white text-2xl leading-[30px]">
                {achievement.result}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
