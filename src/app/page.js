import FeaturedAnimals from "@/components/home/FeaturedAnimals";
import Hero from "@/components/home/Hero";
import QurbaniTips from "@/components/home/QurbaniTips";
import TopBreeds from "@/components/home/TopBreeds";

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
