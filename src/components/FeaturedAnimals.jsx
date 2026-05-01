import Link from "next/link";
import { Card, Button } from "@heroui/react";
import Image from "next/image";

const FeaturedAnimals = async () => {
  const res = await fetch("https://qurbani-hat-server.onrender.com/animals");
  const animals = await res.json();
  const featuredAnimals = animals.slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Featured Animals</h2>
          <p className="text-gray-500">
            Pick the best livestock for your Qurbani
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAnimals.map((animal) => (
            <Card
              key={animal.id}
              shadow="sm"
              className="border border-gray-100"
            >
              <div className="h-56 relative">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex flex-col items-start p-5">
                <div className="flex justify-between w-full mb-2">
                  <h4 className="font-bold text-xl text-gray-800">
                    {animal.name}
                  </h4>
                  <p className="text-orange-600 font-bold text-lg">
                    {animal.price}tk
                  </p>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  {animal.breed} • {animal.weight}kg
                </p>
                <Link href={`/animals/${animal.id}`} className="w-full">
                  <Button
                    className="w-full bg-orange-600 text-white font-bold"
                    radius="sm"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
