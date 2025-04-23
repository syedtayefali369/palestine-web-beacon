
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent, ChartLegendContent } from "@/components/ui/chart";
import { AreaChart, XAxis, YAxis, Area } from "recharts";
import { ChartArea } from "lucide-react";
import { useMemo, useEffect, useRef, useState } from "react";

const deathTollData = [
  { date: "Oct", deaths: 5200 },
  { date: "Nov", deaths: 14500 },
  { date: "Dec", deaths: 22000 },
  { date: "Jan", deaths: 27500 },
  { date: "Feb", deaths: 32000 },
  { date: "Mar", deaths: 35000 },
  { date: "Apr", deaths: 37000 },
];

// Chart color config
const chartConfig = {
  deaths: {
    label: "Death Toll",
    icon: ChartArea,
    color: "rgb(228,49,43)", // palestine-red
    theme: {
      light: "rgb(228,49,43)",
      dark: "rgb(228,49,43)",
    },
  },
};

const ANIMATION_DURATION = 1400; // ms

const DeathTollChart = () => {
  const latest = useMemo(
    () => deathTollData[deathTollData.length - 1]?.deaths || 0,
    []
  );
  const [animatedCount, setAnimatedCount] = useState(deathTollData[0].deaths);
  const ref = useRef<NodeJS.Timeout | null>(null);

  // Animate the death toll count from 1st to latest value
  useEffect(() => {
    // Only animate if not already at the latest
    if (animatedCount === latest) return;
    const start = deathTollData[0].deaths;
    const end = latest;
    const diff = end - start;
    const stepCount = 30;
    let step = 0;

    ref.current && clearInterval(ref.current);

    ref.current = setInterval(() => {
      step += 1;
      // Ease-out animation (cubic)
      const progress = Math.min(1, step / stepCount);
      const eased = Math.pow(progress, 0.6);
      const nextValue = Math.round(start + diff * eased);
      setAnimatedCount(nextValue);
      if (progress >= 1) {
        setAnimatedCount(end);
        ref.current && clearInterval(ref.current);
      }
    }, ANIMATION_DURATION / stepCount);

    return () => {
      ref.current && clearInterval(ref.current);
    };
    // eslint-disable-next-line
  }, [latest]);

  return (
    <Card className="glass-morphism relative flex flex-col items-stretch mt-8 p-4 md:p-6 shadow-xl dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-lg transition">
      <div className="flex items-center gap-2 mb-2">
        <ChartArea className="text-palestine-red" />
        <span className="text-lg font-semibold">Death Toll Over Time (Estimates)</span>
      </div>
      <div className="relative h-[260px] w-full">
        {/* Overlay animated count number absolutely so it's live "over" the chart */}
        <div
          className="absolute top-6 left-1/2 -translate-x-1/2 z-10 
            text-4xl md:text-5xl font-mono font-extrabold transition
            text-palestine-red dark:text-palestine-red drop-shadow-sm select-none px-4 bg-white/80 dark:bg-black/50 rounded-lg animate-pulse border border-white/50 dark:border-black/30"
          aria-label="Cumulative Death Toll"
        >
          {animatedCount.toLocaleString()}+
        </div>
        <ChartContainer config={chartConfig} className="h-full w-full">
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
            <ChartTooltipContent
              className="dark:bg-black/95 dark:text-white dark:border-white/30 backdrop-blur-lg !rounded-lg !shadow-2xl"
              labelClassName="text-palestine-red font-bold"
              formatter={(value: number) => (
                <span className="font-mono text-palestine-red">{value.toLocaleString()}+</span>
              )}
            />
            <ChartLegendContent className="dark:text-gray-200 mt-2" />
          </>
        </ChartContainer>
      </div>
      <div className="mt-4 text-xs text-muted-foreground text-right dark:text-gray-400 transition">
        Data for illustration only. Source: UN, media reports.
      </div>
    </Card>
  );
};

export default DeathTollChart;
