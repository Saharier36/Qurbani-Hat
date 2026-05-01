import FeaturedAnimals from "@/components/FeaturedAnimals";
import Hero from "@/components/Hero";
import QurbaniTips from "@/components/QurbaniTips";
import TopBreeds from "@/components/TopBreeds";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeaturedAnimals />
      <TopBreeds/>
      <QurbaniTips/>
    </div>
  );
}
