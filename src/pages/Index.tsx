
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import LiveUpdates from "@/components/LiveUpdates";
import Education from "@/components/Education";
import TakeAction from "@/components/TakeAction";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroBanner />
        <LiveUpdates />
        <Education />
        <TakeAction />
        <Stories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
