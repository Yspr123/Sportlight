import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const StatsSection = (): JSX.Element => {
  // Data for tabs to make the code more maintainable
  const users = [
    { id: "emma", name: "Emma Hayes", active: true },
    { id: "liam", name: "Liam Carter", active: false },
    { id: "chloe", name: "Chloe Bennett", active: false },
    { id: "owen", name: "Owen Harper", active: false },
    { id: "ava", name: "Ava Foster", active: false },
    { id: "noah", name: "Noah Reed", active: false },
  ];

  return (
    <section className="flex flex-col w-full border-b border-[#3a4754]">
      <Tabs defaultValue="emma" className="w-full">
        <TabsList className="flex h-auto bg-transparent gap-8 px-4 border-0">
          {users.map((user) => (
            <TabsTrigger
              key={user.id}
              value={user.id}
              className={`pt-4 pb-[13px] px-0 rounded-none border-b-[3px] border-[#e5e8ea] data-[state=active]:border-[#e5e8ea] data-[state=inactive]:border-[#e5e8ea] focus:outline-none`}
            >
              <span
                className={`font-bold text-sm leading-[21px] whitespace-nowrap font-['Lexend',Helvetica] tracking-[0] ${
                  user.active ? "text-white" : "text-[#9baaba]"
                } data-[state=active]:text-white data-[state=inactive]:text-[#9baaba]`}
              >
                {user.name}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </section>
  );
};
