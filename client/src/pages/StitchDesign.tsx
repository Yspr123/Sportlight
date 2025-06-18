import {
  ChevronDownIcon,
  HeartIcon,
  MessageSquareIcon,
  PlayIcon,
  Share2Icon,
} from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import all sections
import { AchievementHighlightsSection } from "./sections/AchievementHighlightsSection";
import { AthleteProfilesSection } from "./sections/AthleteProfilesSection";
import { CommentsAndReactionsSection } from "./sections/CommentsAndReactionsSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { CornerHighlightsSection } from "./sections/CornerHighlightsSection";
import { LeaderboardSection } from "./sections/LeaderboardSection";
import { MainContentSection } from "./sections/MainContentSection";
import { MainFrameSection } from "./sections/MainFrameSection";
import { PersonalizedRecommendationsSection } from "./sections/PersonalizedRecommendationsSection";
import { PickYourFavoritePlayerSection } from "./sections/PickYourFavoritePlayerSection";
import { ProfileWrapperSection } from "./sections/ProfileWrapperSection";
import { SectionNodeComponent } from "./sections/SectionNodeComponent";
import { StatsSection } from "./sections/StatsSection";
import { VideoHighlightsSection } from "./sections/VideoHighlightsSection";

// Filter options data
const filterOptions = [
  { label: "All Sports", value: "all-sports" },
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

// Reaction data
const reactions = [
  { icon: <HeartIcon className="h-6 w-6" />, count: "120" },
  { icon: <MessageSquareIcon className="h-6 w-6" />, count: "5" },
  { icon: <Share2Icon className="h-6 w-6" />, count: "30" },
];

export const StitchDesign = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start relative bg-white">
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-[#111416]">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <MainContentSection />
          <div className="items-start justify-center px-40 py-5 flex-1 grow flex relative self-stretch w-full">
            <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-6.00px]">
              <MainFrameSection />

              {/* Filter Options */}
              <div className="flex flex-wrap items-start gap-[12px_12px] pl-3 pr-4 py-3 self-stretch w-full relative flex-[0_0_auto]">
                {filterOptions.map((option, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="h-8 pl-4 pr-2 py-0 bg-[#283038] rounded-xl flex items-center gap-2"
                  >
                    <span className="[font-family:'Lexend',Helvetica] font-medium text-white text-sm">
                      {option.label}
                    </span>
                    <ChevronDownIcon className="h-5 w-5 text-white" />
                  </Badge>
                ))}
              </div>

              {/* Achievement Highlights Header */}
              <div className="flex flex-col h-[60px] items-start pt-5 pb-3 px-4 relative self-stretch w-full">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-7">
                  Achievement Highlights
                </h2>
              </div>

              <ContentWrapperSection />

              {/* Athlete Profiles Header */}
              <div className="flex flex-col h-[60px] items-start pt-5 pb-3 px-4 relative self-stretch w-full">
                <h2 className="text-[22px] leading-7 relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-bold text-white tracking-[0]">
                  Athlete Profiles
                </h2>
              </div>

              <ProfileWrapperSection />

              {/* Detailed Stats Header */}
              <div className="flex flex-col h-[60px] items-start pt-5 pb-3 px-4 relative self-stretch w-full">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-7">
                  Detailed Stats
                </h2>
              </div>

              <StatsSection />

              {/* Career Highlights Section */}
              <div className="flex flex-col h-[47px] pt-4 pb-2 px-4 self-stretch w-full items-start relative">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-lg tracking-[0] leading-[23px]">
                  Career Highlights
                </h3>
              </div>

              <div className="flex flex-col pt-1 pb-3 px-4 self-stretch w-full flex-[0_0_auto] items-start relative">
                <p className="mt-[-1.00px] font-normal text-white text-base leading-6 relative self-stretch [font-family:'Lexend',Helvetica] tracking-[0]">
                  Emma Hayes, a track and field star, has consistently broken
                  records and won numerous championships. Her career highlights
                  include setting a new world record in the 100m sprint and
                  being named Athlete of the Year.
                </p>
              </div>

              {/* Season Stats Header */}
              <div className="flex flex-col h-[47px] pt-4 pb-2 px-4 self-stretch w-full items-start relative">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-lg tracking-[0] leading-[23px]">
                  Season Stats
                </h3>
              </div>

              <SectionNodeComponent />

              {/* Personal Bests Header */}
              <div className="flex flex-col h-[47px] pt-4 pb-2 px-4 self-stretch w-full items-start relative">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-lg tracking-[0] leading-[23px]">
                  Personal Bests
                </h3>
              </div>

              <AchievementHighlightsSection />

              {/* Video Highlights Header */}
              <div className="flex flex-col h-[47px] pt-4 pb-2 px-4 self-stretch w-full items-start relative">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-lg tracking-[0] leading-[23px]">
                  Video Highlights
                </h3>
              </div>

              {/* Video Player */}
              <div className="flex flex-col p-4 self-stretch w-full flex-[0_0_auto] items-start relative">
                <Card className="relative self-stretch w-full h-[522px] rounded-xl overflow-hidden [background:url(..//figmaAssets/depth-5--frame-0.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
                  <CardContent className="p-0">
                    <Button
                      variant="ghost"
                      className="w-16 h-16 absolute top-[229px] left-[432px] bg-[#00000066] rounded-[32px] flex items-center justify-center"
                    >
                      <PlayIcon className="h-6 w-6 text-white" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Comments and Reactions Header */}
              <div className="flex flex-col h-[47px] pt-4 pb-2 px-4 self-stretch w-full items-start relative">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-lg tracking-[0] leading-[23px]">
                  Comments and Reactions
                </h3>
              </div>

              <AthleteProfilesSection />

              {/* Reaction Buttons */}
              <div className="flex flex-wrap gap-[16px_16px] px-4 py-2 self-stretch w-full flex-[0_0_auto] items-start relative">
                {reactions.map((reaction, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2"
                  >
                    <span className="text-[#9baaba]">{reaction.icon}</span>
                    <span className="[font-family:'Lexend',Helvetica] font-bold text-[#9baaba] text-[13px] tracking-[0] leading-5 whitespace-nowrap">
                      {reaction.count}
                    </span>
                  </Button>
                ))}
              </div>

              {/* Pick Your Favorite Player Header */}
              <div className="flex flex-col h-[60px] items-start pt-5 pb-3 px-4 relative self-stretch w-full">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-7">
                  Pick Your Favorite Player
                </h2>
              </div>

              <CommentsAndReactionsSection />

              {/* Leaderboard Header */}
              <div className="flex flex-col pt-4 pb-2 px-4 self-stretch w-full flex-[0_0_auto] items-start relative">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-lg tracking-[0] leading-[23px]">
                  Leaderboard
                </h3>
              </div>

              <PickYourFavoritePlayerSection />

              {/* Personalized Recommendations Header */}
              <div className="flex flex-col h-[60px] items-start pt-5 pb-3 px-4 relative self-stretch w-full">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-7">
                  Personalized Recommendations
                </h2>
              </div>

              <LeaderboardSection />

              {/* Follow Athletes Header */}
              <div className="flex flex-col h-[60px] items-start pt-5 pb-3 px-4 relative self-stretch w-full">
                <h2 className="font-bold text-[22px] leading-7 relative self-stretch mt-[-1.00px] [font-family:'Lexend',Helvetica] text-white tracking-[0]">
                  Follow Athletes
                </h2>
              </div>

              <PersonalizedRecommendationsSection />
              <VideoHighlightsSection />
              <CornerHighlightsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
