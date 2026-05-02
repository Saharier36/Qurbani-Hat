import AnimalList from "@/components/ui/AnimalList";
import { getAnimals } from "@/service/api";
import React from "react";

const AllAnimalsPage = async () => {
  const animals = await getAnimals();

  return (
    
      <div className="container mx-auto py-12 px-6">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-800">All Animals</h1>
          <p className="text-slate-500 mt-1">
            {animals.length} animals available for Qurbani
          </p>
        </div>
        <AnimalList animals={animals} />
        
      </div>
    
  );
};

export default AllAnimalsPage;
