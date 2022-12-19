import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = ({ type, value, precentage, trend }) => {
  return (
    <div className="shadow-lg p-6 flex-1">
      <h3 className="text-xl">{type}</h3>
      <div className="py-4 flex items-center gap-3">
        <span className="font-bold text-2xl">${value}</span>
        <span>
          {precentage}
          {trend ? (
            <ArrowUpward className="text-green-600" />
          ) : (
            <ArrowDownward className="text-red-600" />
          )}
        </span>
      </div>
      <p className="text-gray-600 font-bold text-sm">compared to last month</p>
    </div>
  );
};

export default FeaturedInfo;
