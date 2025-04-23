
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent, ChartLegendContent } from "@/components/ui/chart";
import { AreaChart, XAxis, YAxis, Area, ResponsiveContainer } from "recharts";
import { ChartArea } from "lucide-react";

const deathTollData = [
  { date: "Oct", deaths: 5200 },
  { date: "Nov", deaths: 14500 },
  { date: "Dec", deaths: 22000 },
  { date: "Jan", deaths: 27500 },
  { date: "Feb", deaths: 32000 },
  { date: "Mar", deaths: 35000 },
  { date: "Apr", deaths: 37000 },
];

const chartConfig = {
  deaths: {
    label: "Death Toll",
    icon: ChartArea,
    color: "rgb(228,49,43)", // palestine-red
  },
};

const DeathTollChart = () => {
  return (
    <Card className="glass-morphism flex flex-col items-stretch mt-8 p-4 md:p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-3">
        <ChartArea className="text-palestine-red" />
        <span className="text-lg font-semibold">Death Toll Over Time (Estimates)</span>
      </div>
      <ChartContainer config={chartConfig} className="h-[260px] w-full">
        {/* Wrap chart elements in a fragment to make it a single React element */}
        <>
          <AreaChart data={deathTollData}>
            <XAxis dataKey="date" stroke="#888" />
            <YAxis tickFormatter={(val) => `${val / 1000}k`} stroke="#888" />
            <Area
              type="monotone"
              dataKey="deaths"
              stroke="#E4312B"
              fill="url(#red-gradient)"
              fillOpacity={0.5}
              strokeWidth={3}
              dot={{ r: 3, fill: "#E4312B" }}
            />
            <defs>
              <linearGradient id="red-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="12%" stopColor="#E4312B" stopOpacity={0.6}/>
                <stop offset="88%" stopColor="#E4312B" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
          </AreaChart>
          <ChartTooltipContent />
          <ChartLegendContent />
        </>
      </ChartContainer>
      <div className="mt-2 text-xs text-muted-foreground text-right">
        Data for illustration only. Source: UN, media reports.
      </div>
    </Card>
  );
};

export default DeathTollChart;
