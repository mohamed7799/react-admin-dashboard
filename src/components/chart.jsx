import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const Chart = ({ title, data, dataKey }) => {
  return (
    <div className="shadow-lg p-6 h-full">
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="rgb(147,51,234)" />
          <Line type="monotone" dataKey={dataKey} stroke="rgb(147,51,234)" />
          <Tooltip />
          <CartesianGrid strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
