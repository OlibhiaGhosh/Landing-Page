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
        <div className="absolute inset-0 md:ml-20 lg:ml-40 xl:ml-52 2xl:ml-64">
          <h1 className="text-white text-3xl font-sans md:text-5xl lg:text-4xl xl:text-5xl font-medium mt-28 py-3 px-4 xl:p-4 md:mt-48 lg:mt-20 xl:mt-36">
            Empowering Lives Through
            <br />
            Innovative <a className=" underline decoration-button-color font-bold">AI</a> Technologies.{" "}
          </h1>
          <div className="text-gray-400 md:text-2xl lg:text-xl xl:text-2xl py-2 px-4 xl:p-4 md:py-8">
            Finding new horizons for visionaries to accelerate their innovation
            and progress.
          </div>
          <div className="text-white flex gap-x-4 md:gap-x-6 font-bold p-4 md:max-lg:text-2xl">
            <button className="border-2 bg-button-color border-button-color py-3 px-6 max-sm:p-3 rounded-lg ">
              Explore Our Services
            </button>
            <button className="border-2 border-blue-500 py-3 px-6 max-sm:p-3 rounded-lg">
              Learn More
            </button>
          </div>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#1C1C1C] from-0%  via-[#E3E3E3] via-30% to-[#1C1C1C] to-100% p-4 mt-4 lg:text-md md:max-lg:text-xl">
            From Ideas to Software Solutions <span style={{color: '#f59e0b'}}>💡✨</span> From Ideas to Software
            Solutions <span style={{color: '#f59e0b'}}>🌟✨</span> From Ideas to{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
