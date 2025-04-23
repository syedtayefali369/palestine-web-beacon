
import { Card, CardContent } from "@/components/ui/card";

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "Layla Ibrahim",
      photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120&q=80",
      role: "Medical Student",
      location: "Gaza City",
      quote: "Even in the darkest times, we find ways to continue learning and helping others. My dream is to rebuild our healthcare system and serve my community.",
      story: "Despite repeated disruptions to her education, Layla continues her medical studies whenever possible, often by candlelight when electricity is unavailable. She volunteers at a local field hospital, assisting doctors with limited supplies."
    },
    {
      id: 2,
      name: "Omar Nasser",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120&q=80",
      role: "Urban Farmer",
      location: "Nablus",
      quote: "The land connects us to our history and provides for our future. Through urban farming, we're creating food security and hope.",
      story: "Omar transformed bombed-out buildings into community gardens using hydroponics and vertical farming techniques. His initiative now helps feed dozens of families and teaches children about agriculture and sustainability."
    },
    {
      id: 3,
      name: "Samira Khalil",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120&q=80",
      role: "Educator",
      location: "Ramallah",
      quote: "Education is our most powerful tool for building a better future. When schools were destroyed, we created classrooms everywhere - in tents, homes, under trees.",
      story: "After local schools were damaged, Samira organized a network of volunteer teachers to continue educating children. They developed a curriculum that could be taught without reliable electricity or permanent facilities, ensuring education continues despite challenges."
    }
  ];

  return (
    <section id="stories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-palestine-black mb-2">Stories of Resilience</h2>
          <div className="h-1 w-24 bg-palestine-red mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Behind the statistics are real people with incredible stories of courage, resilience, and hope.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((person) => (
            <Card key={person.id} className="hover:shadow-lg transition duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{person.name}</h3>
                      <p className="text-sm text-gray-500">{person.role} • {person.location}</p>
                    </div>
                  </div>
                  
                  <blockquote className="italic text-gray-700 border-l-4 border-palestine-green pl-4 mb-4">
                    "{person.quote}"
                  </blockquote>
                  
                  <p className="text-gray-600">
                    {person.story}
                  </p>
                </div>
                
                <div className="bg-palestine-black/5 px-6 py-3 flex justify-between items-center">
                  <span className="text-sm text-gray-600">Read full story</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-palestine-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-palestine-black text-palestine-black rounded-md hover:bg-palestine-black hover:text-white transition duration-300">
            <span>Share Your Story</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stories;
