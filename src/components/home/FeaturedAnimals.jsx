import Link from "next/link";
import { Card, Button } from "@heroui/react";
import Image from "next/image";
import { getAnimals } from "@/service/api";

const FeaturedAnimals = async () => {
  const animals = await getAnimals();
  const featuredAnimals = animals.slice(0, 4);

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Pick the best animals from our{" "}
          <span className="text-orange-500 italic">QurbaniHat</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredAnimals.map((animal) => (
          <Card key={animal.id} shadow="sm" className="border border-gray-100">
            <div className="h-56 relative">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="p-3">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-gray-800 text-sm truncate">
                  {animal.name}
                </h4>
                <p className="text-emerald-600 font-bold text-sm shrink-0 ml-2">
                  {animal.price.toLocaleString()}tk
                </p>
              </div>
              <p className="text-xs text-gray-500">
                {animal.breed} · {animal.weight}kg
              </p>
              <div className="mt-3">
                <Link href={`/animals/${animal.id}`} className="w-full">
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold"
                    size="sm"
                    radius="sm"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAnimals;
