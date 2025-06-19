import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProfileWrapperSection = (): JSX.Element => {
  // Data for athlete profiles
  const athleteProfiles = [
    {
      id: 1,
      name: "Emma Hayes",
      sport: "Track and Field",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Liam Carter",
      sport: "Basketball",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Chloe Bennett",
      sport: "Swimming",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Owen Harper",
      sport: "Soccer",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "Ava Foster",
      sport: "Gymnastics",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Noah Reed",
      sport: "Tennis",
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
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
  const [followed, setFollowed] = useState(false);
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
          <Button
            variant={followed ? "default" : "outline"}
            className={`h-7 px-3 mt-2 text-xs rounded-xl ${followed ? "bg-[#0c7ff2] text-white" : "bg-[#283038] text-white border-none"}`}
            onClick={() => setFollowed((v) => !v)}
          >
            {followed ? "Following" : "Follow"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
