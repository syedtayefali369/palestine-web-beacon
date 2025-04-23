
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-palestine-black mb-2">Learn About Palestine</h2>
          <div className="h-1 w-24 bg-palestine-red mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Educate yourself about Palestinian history, culture, and the ongoing humanitarian crisis.
          </p>
        </div>

        <Tabs defaultValue="history" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="culture">Culture</TabsTrigger>
            <TabsTrigger value="crisis">Current Crisis</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="history">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Historical Context</h3>
                <div className="space-y-4">
                  <p>
                    Palestine has a rich history dating back thousands of years. The region has been home to diverse civilizations and has historical significance for multiple religions.
                  </p>
                  <p>
                    Understanding the historical context is essential for comprehending the current situation. The timeline below highlights key moments in Palestinian history:
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="flex">
                      <div className="flex-shrink-0 w-24 font-bold text-palestine-green">Pre-1917</div>
                      <div>Ottoman rule of the region for approximately 400 years</div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-24 font-bold text-palestine-green">1917-1948</div>
                      <div>British Mandate period following World War I</div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-24 font-bold text-palestine-green">1948</div>
                      <div>Nakba ("The Catastrophe") - approximately 750,000 Palestinians were displaced</div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-24 font-bold text-palestine-green">1967</div>
                      <div>Six-Day War results in occupation of West Bank and Gaza</div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-24 font-bold text-palestine-green">1987-1993</div>
                      <div>First Intifada (Palestinian uprising)</div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-24 font-bold text-palestine-green">2000-2005</div>
                      <div>Second Intifada</div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-24 font-bold text-palestine-green">2007-Present</div>
                      <div>Gaza blockade</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="culture">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Palestinian Culture</h3>
                <div className="space-y-4">
                  <p>
                    Palestinian culture is rich and diverse, with deep roots in the region's history. It encompasses literature, music, dance, cuisine, art, and traditional crafts.
                  </p>
                  
                  <h4 className="text-xl font-medium text-palestine-red mt-6">Traditional Arts & Crafts</h4>
                  <p>
                    Palestinian embroidery (tatreez) is world-renowned for its intricate patterns and regional variations. Each design tells a story about the village it comes from. Other traditional crafts include pottery, glassblowing, olive wood carving, and soap making.
                  </p>
                  
                  <h4 className="text-xl font-medium text-palestine-red mt-6">Cuisine</h4>
                  <p>
                    Palestinian cuisine features dishes like maqluba (an upside-down rice and vegetable dish), musakhan (sumac-seasoned chicken with onions on taboon bread), and knafeh (a sweet cheese pastry). Olive oil, za'atar, and fresh herbs are staple ingredients.
                  </p>
                  
                  <h4 className="text-xl font-medium text-palestine-red mt-6">Music & Dance</h4>
                  <p>
                    Dabke is a traditional folk dance performed at celebrations. Participants form a line and perform coordinated stomping movements. Palestinian music features instruments like the oud, qanun, and darbouka.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="crisis">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Current Humanitarian Crisis</h3>
                <div className="space-y-4">
                  <p>
                    The ongoing crisis in Palestine has resulted in severe humanitarian challenges affecting millions of civilians. Here are the key aspects of the current situation:
                  </p>
                  
                  <h4 className="text-xl font-medium text-palestine-red mt-6">Health Infrastructure</h4>
                  <p>
                    Healthcare facilities have been severely damaged or destroyed. Medical supplies are critically low, and healthcare workers are operating in dangerous conditions with limited resources.
                  </p>
                  
                  <h4 className="text-xl font-medium text-palestine-red mt-6">Food Insecurity</h4>
                  <p>
                    The United Nations warns of widespread hunger and malnutrition. Food distribution systems have broken down, and many areas face restricted access to food supplies.
                  </p>
                  
                  <h4 className="text-xl font-medium text-palestine-red mt-6">Water & Sanitation</h4>
                  <p>
                    Clean water is increasingly scarce, raising concerns about waterborne diseases. Sanitation infrastructure has been damaged, complicating waste management and hygiene maintenance.
                  </p>
                  
                  <h4 className="text-xl font-medium text-palestine-red mt-6">Displacement</h4>
                  <p>
                    Nearly 2 million people have been displaced from their homes, often multiple times. Shelter facilities are overcrowded and lack basic amenities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Educational Resources</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium text-palestine-green">Books</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>"The Hundred Years' War on Palestine" by Rashid Khalidi</li>
                      <li>"Palestine: A Four Thousand Year History" by Nur Masalha</li>
                      <li>"The Question of Palestine" by Edward Said</li>
                      <li>"Gaza: An Inquest into Its Martyrdom" by Norman Finkelstein</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium text-palestine-green">Documentaries</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>"5 Broken Cameras" (2011)</li>
                      <li>"The Wanted 18" (2014)</li>
                      <li>"Gaza Fights for Freedom" (2019)</li>
                      <li>"Occupation 101" (2006)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium text-palestine-green">Academic Resources</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Journal of Palestine Studies</li>
                      <li>Institute for Palestine Studies</li>
                      <li>UN Office for the Coordination of Humanitarian Affairs (OCHA) - Palestine</li>
                      <li>Al-Shabaka: The Palestinian Policy Network</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium text-palestine-green">Online Courses</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>"Palestinian History Through Literature" - Online course</li>
                      <li>"Introduction to the Palestine-Israel Conflict" - University webinar series</li>
                      <li>"Understanding the Middle East" - Educational series</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Education;
