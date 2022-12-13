import FeaturedInfo from "../components/featuredInfo";

const Home = () => {
  return (
    <section className="p-3">
      <div className="flex gap-5">
        <FeaturedInfo></FeaturedInfo>
        <FeaturedInfo></FeaturedInfo>
        <FeaturedInfo></FeaturedInfo>
      </div>
    </section>
  );
};

export default Home;
