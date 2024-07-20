import backgroundImage from "../assets/bg.png";
function Hero() {
  return (
    <>
      <div
        className="relative h-screen w-full  bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 lg:ml-40 xl:ml-64">
          <h1 className="text-white text-3xl lg:text-4xl xl:text-6xl font-bold mt-28 py-3 px-4 xl:p-4 lg:mt-20 xl:mt-36">
            Empowering Lives Through
            <br />
            Innovative AI Technologies.{" "}
          </h1>
          <div className="text-gray-400 lg:text-xl xl:text-2xl py-2 px-4 xl:p-4">
            Finding new horizons for visionaries to accelerate their innovation
            and progress.
          </div>
          <div className="text-white flex gap-x-4 font-bold p-4">
            <button className="border-2 bg-button-color border-button-color p-3 rounded-lg">
              Explore Our Services
            </button>
            <button className="border-2 border-blue-500 p-3 rounded-lg">
              Learn More
            </button>
          </div>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1C1C1C] from-0%  via-[#E3E3E3] via-30% to-[#1C1C1C] to-100% p-4 mt-4 lg:text-md">
            From Ideas to Software Solutions <span style={{color: '#f59e0b'}}>💡✨</span> From Ideas to Software
            Solutions <span style={{color: '#f59e0b'}}>🌟✨</span> From Ideas to{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
