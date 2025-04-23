
import { Card, CardContent } from "@/components/ui/card";

interface Update {
  id: number;
  date: string;
  title: string;
  description: string;
  source: string;
}

const updates: Update[] = [
  {
    id: 1,
    date: "2025-04-23",
    title: "Humanitarian Aid Supplies Running Critically Low",
    description: "Aid organizations report severe shortages of medical supplies, food, and clean water in Gaza. UN officials warn that hospitals are operating at minimal capacity.",
    source: "UN OCHA"
  },
  {
    id: 2,
    date: "2025-04-22",
    title: "Education Disrupted for 600,000 Children",
    description: "Schools remain closed or destroyed across the region, with hundreds of thousands of children lacking access to education for several months.",
    source: "UNICEF"
  },
  {
    id: 3,
    date: "2025-04-21",
    title: "International Diplomatic Efforts Intensify",
    description: "Global leaders meet to discuss ceasefire proposals and humanitarian corridors as international pressure mounts for peaceful resolution.",
    source: "Diplomatic Sources"
  }
];

const LiveUpdates = () => {
  return (
    <section id="updates" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-palestine-black mb-2">Latest Updates</h2>
          <div className="h-1 w-24 bg-palestine-green mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Stay informed with the most recent developments regarding the humanitarian situation in Palestine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {updates.map((update) => (
            <Card key={update.id} className="border-l-4 border-l-palestine-red hover:shadow-md transition duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{update.date}</span>
                  <span className="text-xs bg-palestine-green/10 text-palestine-green px-2 py-1 rounded-full">
                    {update.source}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2">{update.title}</h3>
                <p className="text-gray-700">{update.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="text-palestine-green hover:text-palestine-green/80 font-medium inline-flex items-center">
            View all updates
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiveUpdates;
