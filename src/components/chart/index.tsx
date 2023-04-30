import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { IRawCore } from "../../models";
import './chart.scss';

export default function App({ data }: { data: IRawCore[] }) {
  return (
    <div style={{ margin: "5rem 0px" }}>
      <div className="chartTitle">Cost per MeterCategory</div>
      <BarChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="MeterCategory" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Cost" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
