import Chart from "../components/chart";
import FeaturedInfo from "../components/featuredInfo";

const Home = () => {
  return (
    <section className="p-3">
      <div className="flex gap-5 mb-6">
        <FeaturedInfo></FeaturedInfo>
        <FeaturedInfo></FeaturedInfo>
        <FeaturedInfo></FeaturedInfo>
      </div>
      <Chart></Chart>
    </section>
  );
};

export default Home;
