import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Data for the sprint cards
const sprintData = [
  {
    event: "100m Sprint",
    time: "10.49s",
  },
  {
    event: "200m Sprint",
    time: "21.80s",
  },
  {
    event: "4x100m Relay",
    time: "42.50s",
  },
];

export const SectionNodeComponent = (): JSX.Element => {
  return (
    <section className="flex flex-wrap items-start gap-4 p-4 w-full">
      {sprintData.map((sprint, index) => (
        <Card
          key={index}
          className="flex-1 min-w-[158px] border border-solid border-[#3a4754] rounded-xl bg-transparent"
        >
          <CardContent className="flex flex-col gap-2 p-6">
            <div className="flex flex-col items-start w-full">
              <h3 className="w-full mt-[-1px] font-medium text-white text-base leading-6 [font-family:'Lexend',Helvetica]">
                {sprint.event}
              </h3>
            </div>
            <div className="flex flex-col items-start w-full">
              <p className="w-full mt-[-1px] font-bold text-white text-2xl leading-[30px] [font-family:'Lexend',Helvetica]">
                {sprint.time}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
