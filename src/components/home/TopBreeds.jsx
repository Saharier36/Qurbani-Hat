import { Card } from "@heroui/react";

const TopBreeds = () => {
  const breeds = [
    { id: 1, name: "Red Chittagong", category: "Cow" },
    { id: 2, name: "Black Bengal", category: "Goat" },
    { id: 3, name: "Sahiwal", category: "Cow" },
    { id: 4, name: "Local Deshi", category: "Mixed" },
  ];

  return (
    <section className="container mx-auto px-6 pb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-800 text-center">
        Our Top Breeds
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {breeds.map((breed) => (
          <Card
            key={breed.id}
            shadow="sm"
            className="p-5 flex flex-col items-center justify-center border-2 border-orange-500 bg-[#F7F1E1] shadow-lg"
          >
            <h3 className="font-bold text-xl text-slate-800 truncate">
              {breed.name}
            </h3>
            <p className="uppercase font-semibold mt-1">{breed.category}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TopBreeds;
