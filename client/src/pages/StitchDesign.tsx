import {
  ChevronDownIcon,
  HeartIcon,
  MessageSquareIcon,
  PlayIcon,
  Share2Icon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
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
const sportsOptions = [
  { label: "All Sports", value: "all-sports" },
  { label: "Basketball", value: "basketball" },
  { label: "Soccer", value: "soccer" },
  { label: "Tennis", value: "tennis" },
  { label: "Athletics", value: "athletics" },
];
const genderOptions = [
  { label: "All", value: "all" },
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

// Reaction data
const initialReactions = [
  { icon: <HeartIcon className="h-6 w-6" />, count: 120, key: "like" },
  { icon: <MessageSquareIcon className="h-6 w-6" />, count: 5, key: "comment" },
  { icon: <Share2Icon className="h-6 w-6" />, count: 30, key: "share" },
];

export const StitchDesign = (): JSX.Element => {
  // Dropdown state
  const [showSportsDropdown, setShowSportsDropdown] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [selectedSport, setSelectedSport] = useState(sportsOptions[0]);
  const [selectedGender, setSelectedGender] = useState(genderOptions[0]);
  // Play video modal state
  const [showVideo, setShowVideo] = useState(false);
  // Reaction state
  const [reactions, setReactions] = useState(initialReactions);

  // Dropdown handlers
  const handleSportsClick = () => {
    setShowSportsDropdown((v) => !v);
    setShowGenderDropdown(false);
  };
  const handleGenderClick = () => {
    setShowGenderDropdown((v) => !v);
    setShowSportsDropdown(false);
  };
  const handleSportSelect = (option) => {
    setSelectedSport(option);
    setShowSportsDropdown(false);
  };
  const handleGenderSelect = (option) => {
    setSelectedGender(option);
    setShowGenderDropdown(false);
  };

  // Reaction handlers
  const handleReaction = (key: string) => {
    setReactions((prev) =>
      prev.map((r) =>
        r.key === key
          ? { ...r, count: typeof r.count === "number" ? r.count + 1 : 1 }
          : r
      )
    );
  };

  // Play button handler
  const handlePlay = () => setShowVideo(true);
  const handleCloseVideo = () => setShowVideo(false);

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
                {/* Sports Dropdown */}
                <div className="relative">
                  <Badge
                    variant="outline"
                    className="h-8 pl-4 pr-2 py-0 bg-[#283038] rounded-xl flex items-center gap-2 cursor-pointer"
                    onClick={handleSportsClick}
                  >
                    <span className="[font-family:'Lexend',Helvetica] font-medium text-white text-sm">
                      {selectedSport.label}
                    </span>
                    <ChevronDownIcon className="h-5 w-5 text-white" />
                  </Badge>
                  {showSportsDropdown && (
                    <div className="absolute left-0 mt-2 bg-[#222] rounded-lg shadow-lg z-20 min-w-[140px]">
                      {sportsOptions.map((option) => (
                        <div
                          key={option.value}
                          className="px-4 py-2 text-white hover:bg-[#333] cursor-pointer"
                          onClick={() => handleSportSelect(option)}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Gender Dropdown */}
                <div className="relative">
                  <Badge
                    variant="outline"
                    className="h-8 pl-4 pr-2 py-0 bg-[#283038] rounded-xl flex items-center gap-2 cursor-pointer"
                    onClick={handleGenderClick}
                  >
                    <span className="[font-family:'Lexend',Helvetica] font-medium text-white text-sm">
                      {selectedGender.label}
                    </span>
                    <ChevronDownIcon className="h-5 w-5 text-white" />
                  </Badge>
                  {showGenderDropdown && (
                    <div className="absolute left-0 mt-2 bg-[#222] rounded-lg shadow-lg z-20 min-w-[100px]">
                      {genderOptions.map((option) => (
                        <div
                          key={option.value}
                          className="px-4 py-2 text-white hover:bg-[#333] cursor-pointer"
                          onClick={() => handleGenderSelect(option)}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
                <Card className="relative self-stretch w-full h-[522px] rounded-xl overflow-hidden"
                  style={{
                    background:
                      "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80') 50% 50% / cover",
                  }}
                >
                  <CardContent className="p-0">
                    <Button
                      variant="ghost"
                      className="w-16 h-16 absolute top-[229px] left-[432px] bg-[#00000066] rounded-[32px] flex items-center justify-center"
                      onClick={handlePlay}
                    >
                      <PlayIcon className="h-6 w-6 text-white" />
                    </Button>
                  </CardContent>
                  {/* Video Modal */}
                  {showVideo && (
                    <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-30">
                      <div className="relative w-[80%] h-[60%] bg-black rounded-xl flex flex-col items-center justify-center">
                        <button
                          className="absolute top-2 right-2 text-white"
                          onClick={handleCloseVideo}
                        >
                          <XIcon className="h-6 w-6" />
                        </button>
                        <video
                          controls
                          autoPlay
                          className="w-full h-full rounded-xl"
                          poster="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80"
                        >
                          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}
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
                    onClick={() => handleReaction(reaction.key)}
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
