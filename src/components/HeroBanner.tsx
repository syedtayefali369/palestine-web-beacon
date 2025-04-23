
import DeathTollChart from "./DeathTollChart";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-palestine-black via-palestine-black to-palestine-green pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="max-w-xl space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-primary leading-tight">
                Amplifying Palestinian Voices
              </h1>
              <div className="h-1 w-24 bg-palestine-red"></div>
              <p className="text-white/90 text-xl">
                Raising awareness, sharing stories, and supporting humanitarian efforts in Palestine.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="#help" className="px-6 py-3 bg-palestine-red text-white font-medium rounded-md hover:bg-red-700 transition duration-300 inline-flex items-center hover-scale">
                  How to Help
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#updates" className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition duration-300 hover-scale">
                  Latest Updates
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md animate-fade-in">
              {/* Palestinian flag */}
              <div className="absolute inset-0 bg-palestine-green opacity-20 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-palestine-red opacity-20 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-gradient-to-br from-palestine-black to-gray-900 p-1 rounded-lg shadow-xl glass-morphism">
                <div className="h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center bg-palestine-black">
                    <div className="h-full w-full flex flex-col">
                      <div className="flex-1 bg-palestine-black"></div>
                      <div className="flex-1 bg-palestine-white"></div>
                      <div className="flex-1 bg-palestine-green"></div>
                      <div className="absolute left-0 w-1/3 h-full bg-palestine-red clip-triangle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats banner - advanced glass UI, more visually appealing */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="glass-morphism p-4 md:p-6 rounded-2xl text-center shadow-md border border-white/10 bg-white/10 backdrop-blur-lg hover-scale">
            <p className="text-3xl md:text-4xl font-bold text-white/90 drop-shadow">37K+</p>
            <p className="text-white/80 mt-1 text-gradient">Lives Lost</p>
          </div>
          <div className="glass-morphism p-4 md:p-6 rounded-2xl text-center shadow-md border border-white/10 bg-white/10 backdrop-blur-lg hover-scale">
            <p className="text-3xl md:text-4xl font-bold text-white/90 drop-shadow">1.9M</p>
            <p className="text-white/80 mt-1 text-gradient">Displaced</p>
          </div>
          <div className="glass-morphism p-4 md:p-6 rounded-2xl text-center shadow-md border border-white/10 bg-white/10 backdrop-blur-lg hover-scale">
            <p className="text-3xl md:text-4xl font-bold text-white/90 drop-shadow">$15B</p>
            <p className="text-white/80 mt-1 text-gradient">Damage</p>
          </div>
          <div className="glass-morphism p-4 md:p-6 rounded-2xl text-center shadow-md border border-white/10 bg-white/10 backdrop-blur-lg hover-scale">
            <p className="text-3xl md:text-4xl font-bold text-white/90 drop-shadow">500K</p>
            <p className="text-white/80 mt-1 text-gradient">Facing Famine</p>
          </div>
        </div>
        {/* Embed Death Toll Chart */}
        <DeathTollChart />
      </div>
    </section>
  );
};

export default HeroBanner;
