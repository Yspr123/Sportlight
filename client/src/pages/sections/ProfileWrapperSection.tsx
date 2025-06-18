import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ProfileWrapperSection = (): JSX.Element => {
  // Data for athlete profiles
  const athleteProfiles = [
    {
      id: 1,
      name: "Emma Hayes",
      sport: "Track and Field",
      image: "..//figmaAssets/depth-7--frame-0-3.png",
    },
    {
      id: 2,
      name: "Liam Carter",
      sport: "Basketball",
      image: "..//figmaAssets/depth-7--frame-0-4.png",
    },
    {
      id: 3,
      name: "Chloe Bennett",
      sport: "Swimming",
      image: "..//figmaAssets/depth-7--frame-0-5.png",
    },
    {
      id: 4,
      name: "Owen Harper",
      sport: "Soccer",
      image: "..//figmaAssets/depth-7--frame-0-6.png",
    },
    {
      id: 5,
      name: "Ava Foster",
      sport: "Gymnastics",
      image: "..//figmaAssets/depth-7--frame-0-7.png",
    },
    {
      id: 6,
      name: "Noah Reed",
      sport: "Tennis",
      image: "..//figmaAssets/depth-7--frame-0-8.png",
    },
  ];

  // Group athletes into rows (5 in first row, 1 in second row)
  const firstRowAthletes = athleteProfiles.slice(0, 5);
  const secondRowAthletes = athleteProfiles.slice(5);

  return (
    <section className="flex flex-col gap-3 p-4 w-full">
      {/* First row of athlete profiles */}
      <div className="flex items-start gap-3 w-full overflow-x-auto">
        {firstRowAthletes.map((athlete) => (
          <AthleteProfileCard
            key={athlete.id}
            name={athlete.name}
            sport={athlete.sport}
            image={athlete.image}
          />
        ))}
      </div>

      {/* Second row of athlete profiles */}
      <div className="flex items-start gap-3 w-full overflow-x-auto">
        {secondRowAthletes.map((athlete) => (
          <AthleteProfileCard
            key={athlete.id}
            name={athlete.name}
            sport={athlete.sport}
            image={athlete.image}
          />
        ))}
      </div>
    </section>
  );
};

// Athlete profile card component
interface AthleteProfileCardProps {
  name: string;
  sport: string;
  image: string;
}

const AthleteProfileCard = ({
  name,
  sport,
  image,
}: AthleteProfileCardProps) => {
  return (
    <Card className="flex flex-col w-44 border-none">
      <CardContent className="flex flex-col items-start gap-3 p-0">
        <div
          className="w-full h-[235px] rounded-xl"
          style={{ background: `url(${image}) 50% 50% / cover` }}
        />
        <div className="flex flex-col items-start w-full pb-3">
          <h3 className="font-medium text-white text-base leading-6 w-full [font-family:'Lexend',Helvetica] tracking-[0]">
            {name}
          </h3>
          <p className="[font-family:'Lexend',Helvetica] font-normal text-[#9baaba] text-sm tracking-[0] leading-[21px] w-full">
            {sport}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
