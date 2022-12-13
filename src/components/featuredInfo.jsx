import { ArrowDownward } from "@mui/icons-material";

const FeaturedInfo = () => {
  return (
    <div className="shadow-lg p-6 flex-1">
      <h3 className="text-xl">Revanue</h3>
      <div className="py-4 flex items-center gap-3">
        <span className="font-bold text-2xl">$2,400</span>
        <span>
          -11.4% <ArrowDownward className="text-red-600" />
        </span>
      </div>
      <p className="text-gray-600 font-bold text-sm">compared to last month</p>
    </div>
  );
};

export default FeaturedInfo;
