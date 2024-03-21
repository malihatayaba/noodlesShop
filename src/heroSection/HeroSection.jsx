import heroSection from "../assets/images/Ramen-noodle-bowl.jpg";
const HeroSection = () => {
  return (
    <div className="hero min-h-screen">
      <img
        src={heroSection}
        style={{ maxWidth: "100%", width: "1550px", height: "800px" }}
      />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-yellow-500">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Noodles Shop!</h1>
          <p className="mb-5 font-semibold text-2xl text-yellow-500">
            From Bowl to Soul: Noodles that delight!
          </p>
          <button className="btn text-lg bg-yellow-500 border-black text-black font-bold m-2 hover:bg-yellow-400  ">
            Book A Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
