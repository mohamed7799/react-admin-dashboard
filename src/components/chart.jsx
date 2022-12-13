import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3000,
  },
  {
    name: "Mar",
    "Active User": 2500,
  },
  {
    name: "Apr",
    "Active User": 6000,
  },
  {
    name: "May",
    "Active User": 1000,
  },
  {
    name: "Jun",
    "Active User": 8000,
  },
  {
    name: "Jul",
    "Active User": 5000,
  },
];

const Chart = () => {
  return (
    <div className="shadow-lg p-6">
      <h3 className="font-bold text-lg mb-4">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="rgb(147,51,234)" />
          <Line
            type="monotone"
            dataKey="Active User"
            stroke="rgb(147,51,234)"
          />
          <Tooltip />
          <CartesianGrid strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
