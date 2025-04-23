
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent, ChartLegendContent } from "@/components/ui/chart";
import { AreaChart, XAxis, YAxis, Area, ResponsiveContainer } from "recharts";
import { ChartArea } from "lucide-react";
import { useMemo } from "react";

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
    // NOTE: In your dark mode Tailwind config, it will blend with background.
  },
};

const DeathTollChart = () => {
  // Latest value (for big total count)
  const latest = useMemo(
    () => deathTollData[deathTollData.length - 1]?.deaths || 0,
    []
  );

  return (
    <Card className="glass-morphism flex flex-col items-stretch mt-8 p-4 md:p-6 shadow-xl dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-lg transition">
      <div className="flex items-center gap-2 mb-2">
        <ChartArea className="text-palestine-red" />
        <span className="text-lg font-semibold">Death Toll Over Time (Estimates)</span>
      </div>
      {/* Large animated death toll number */}
      <div className="text-4xl md:text-5xl font-mono font-extrabold text-palestine-red mb-2 dark:text-palestine-red transition animate-pulse drop-shadow-sm select-none" aria-label="Cumulative Death Toll">
        {latest.toLocaleString()}+
      </div>
      <ChartContainer config={chartConfig} className="h-[260px] w-full">
        {/* Make all chart-elements a single React node (Fragment) */}
        <>
          <AreaChart data={deathTollData}>
            <XAxis 
              dataKey="date" 
              stroke="#888" 
              tick={{ fill: 'var(--tw-prose-invert, #fff)', fontWeight: 500 }}
              axisLine={{ stroke: "var(--tw-prose-invert,#333)" }}
              tickLine={{ stroke: "var(--tw-prose-invert, #ccc)" }}
            />
            <YAxis 
              tickFormatter={(val) => `${val / 1000}k`}
              stroke="#888"
              tick={{ fill: 'var(--tw-prose-invert, #fff)', fontWeight: 500 }}
              axisLine={{ stroke: "var(--tw-prose-invert,#333)" }}
              tickLine={{ stroke: "var(--tw-prose-invert, #ccc)" }}
            />
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
              {/* Responsive gradient for light/dark */}
              <linearGradient id="red-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="12%" stopColor="#E4312B" stopOpacity={0.7}/>
                <stop offset="88%" stopColor="#E4312B" stopOpacity={0.08}/>
              </linearGradient>
            </defs>
          </AreaChart>
          <ChartTooltipContent className="dark:bg-black/90 dark:text-white dark:border-white/30 backdrop-blur-md"/>
          <ChartLegendContent className="dark:text-gray-200" />
        </>
      </ChartContainer>
      <div className="mt-2 text-xs text-muted-foreground text-right dark:text-gray-400 transition">
        Data for illustration only. Source: UN, media reports.
      </div>
    </Card>
  );
};

export default DeathTollChart;
