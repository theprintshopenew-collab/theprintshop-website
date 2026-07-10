"use client";

import {
  DollarSign,
  ShoppingBag,
  Package,
  MessageSquareText,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { StaggerGroup } from "@/components/shared/AnimatedSection";
import { StatCard } from "./StatCard";
import { revenueByMonth, ordersByCategory } from "@/data/admin";

type AnalyticsSectionProps = {
  productCount: number;
  pendingQuoteCount: number;
  darkMode: boolean;
};

export function AnalyticsSection({
  productCount,
  pendingQuoteCount,
  darkMode,
}: AnalyticsSectionProps) {
  const gridColor = darkMode ? "#293042" : "#E5E1D8";
  const axisColor = darkMode ? "#8B93A7" : "#6B6A66";
  const tooltipBg = darkMode ? "#151926" : "#FFFFFF";
  const tooltipBorder = darkMode ? "#293042" : "#D8D3C9";

  return (
    <div className="flex flex-col gap-6">
      <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={DollarSign}
          label="Revenue this month"
          value="$23,100"
          change="+8.2%"
          trend="up"
        />
        <StatCard
          icon={ShoppingBag}
          label="Orders this month"
          value="1,240"
          change="+4.6%"
          trend="up"
        />
        <StatCard
          icon={Package}
          label="Products listed"
          value={String(productCount)}
          change="+2 new"
          trend="up"
        />
        <StatCard
          icon={MessageSquareText}
          label="Pending quotes"
          value={String(pendingQuoteCount)}
          change="-1.3%"
          trend="down"
        />
      </StaggerGroup>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
        <div className="rounded-2xl border border-neutral-300/60 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-[#151926] xl:col-span-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
                Revenue trend
              </h3>
              <p className="text-xs text-neutral-600 dark:text-slate-400">
                Last 6 months
              </p>
            </div>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueByMonth} margin={{ left: -20, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                <XAxis
                  dataKey="month"
                  stroke={axisColor}
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke={axisColor}
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value: number) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    background: tooltipBg,
                    border: `1px solid ${tooltipBorder}`,
                    borderRadius: 12,
                    fontSize: 13,
                  }}
                  labelStyle={{ color: darkMode ? "#FFFFFF" : "#161A2B" }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#E9611D"
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: "#E9611D", strokeWidth: 0 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-300/60 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-[#151926] xl:col-span-2">
          <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
            Orders by category
          </h3>
          <p className="text-xs text-neutral-600 dark:text-slate-400">
            Current quarter
          </p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ordersByCategory} margin={{ left: -20, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                <XAxis
                  dataKey="category"
                  stroke={axisColor}
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  interval={0}
                  angle={-20}
                  textAnchor="end"
                  height={50}
                />
                <YAxis stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: tooltipBg,
                    border: `1px solid ${tooltipBorder}`,
                    borderRadius: 12,
                    fontSize: 13,
                  }}
                  labelStyle={{ color: darkMode ? "#FFFFFF" : "#161A2B" }}
                  cursor={{ fill: darkMode ? "#ffffff0a" : "#1611200a" }}
                />
                <Bar dataKey="orders" fill="#D9A441" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
