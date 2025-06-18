import React from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const PickYourFavoritePlayerSection = (): JSX.Element => {
  // Data for the table rows
  const players = [
    { rank: 1, name: "Emma Hayes", points: 1500 },
    { rank: 2, name: "Liam Carter", points: 1450 },
    { rank: 3, name: "Chloe Bennett", points: 1400 },
    { rank: 4, name: "Owen Harper", points: 1350 },
    { rank: 5, name: "Ava Foster", points: 1300 },
  ];

  return (
    <section className="flex flex-col px-4 py-3 w-full">
      <Card className="w-full bg-[#111416] rounded-xl overflow-hidden border border-solid border-[#3a4754]">
        <Table>
          <TableHeader className="bg-[#1c2126]">
            <TableRow className="border-none">
              <TableHead className="w-[306px] px-4 py-3 [font-family:'Lexend',Helvetica] font-medium text-white text-sm">
                Rank
              </TableHead>
              <TableHead className="w-[311px] px-4 py-3 [font-family:'Lexend',Helvetica] font-medium text-white text-sm">
                Athlete
              </TableHead>
              <TableHead className="w-[308px] px-4 py-3 [font-family:'Lexend',Helvetica] font-medium text-white text-sm">
                Points
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player) => (
              <TableRow
                key={player.rank}
                className="h-[72px] border-t border-[#e5e8ea] border-solid"
              >
                <TableCell className="px-4 py-2 h-[72px] [font-family:'Lexend',Helvetica] font-normal text-sm text-white">
                  {player.rank}
                </TableCell>
                <TableCell className="px-4 py-2 h-[72px] [font-family:'Lexend',Helvetica] font-normal text-sm text-white">
                  {player.name}
                </TableCell>
                <TableCell className="px-4 py-2 h-[72px] [font-family:'Lexend',Helvetica] font-normal text-sm text-[#9baaba]">
                  {player.points}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </section>
  );
};
