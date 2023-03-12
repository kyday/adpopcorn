import React from "react";

import {
  ResponsiveContainer,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ComposedChart,
  ReferenceLine,
} from "recharts";
import { theme } from "../../styles/theme";
import { GraphData } from "../../utils/charData/data";

type StyledComposedChartType = {
  chartData: GraphData[];
  nowYear: number;
};

export default function StyledComposedChart(props: StyledComposedChartType) {
  const { chartData, nowYear } = props;

  return (
    <ResponsiveContainer width="100%" height="30%">
      <ComposedChart
        width={300}
        height={500}
        data={chartData}
        margin={{
          top: 20,
          right: 20,
          bottom: 10,
          left: 20,
        }}
        style={{
          marginBottom: "2rem",
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />

        <YAxis
          scale={nowYear === 2021 ? "auto" : "log"}
          domain={[1, "auto"]}
          tick={{ fontSize: 10 }}
          tickFormatter={(value) => value.toLocaleString()}
        />

        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke={theme.colors.black} />
        <Bar dataKey="Revenue" fill={theme.colors.blue} />
        <Bar
          dataKey="Complete"
          fill={theme.colors.limeGreen}
          minPointSize={5}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
