import Chart from "../components/chart";
import FeaturedInfo from "../components/featuredInfo";
import WidgetLG from "../components/widgetLG";
import WidgetSM from "../components/widgetSM";

const Home = () => {
  return (
    <section className="p-3">
      <div className="flex gap-5 mb-6">
        <FeaturedInfo
          type="Revanue"
          value="1,200"
          precentage="+%1.5"
          trend={true}
        ></FeaturedInfo>
        <FeaturedInfo
          type="Sales"
          value="3,200"
          precentage="-%2.5"
          trend={false}
        ></FeaturedInfo>
        <FeaturedInfo
          type="Cost"
          value="5,000"
          precentage="+%1.5"
          trend={true}
        ></FeaturedInfo>
      </div>
      <div className="mb-6">
        <Chart></Chart>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 ">
          <WidgetSM />
        </div>
        <div className="flex-[2_2_0%]">
          <WidgetLG />
        </div>
      </div>
    </section>
  );
};

export default Home;
