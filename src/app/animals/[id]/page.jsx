import BookingForm from "@/components/ui/BookingForm";
import { getAnimalDetails } from "@/service/api";
import { MapPin } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import Image from "next/image";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const animal = await getAnimalDetails(id);
  return {
    title: animal.name,
    description: animal.description,
  };
};

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const animal = await getAnimalDetails(id);

  const data = [
    { label: "Type", value: animal.type },
    { label: "Breed", value: animal.breed },
    { label: "Weight", value: `${animal.weight} kg` },
    { label: "Age", value: `${animal.age} yrs` },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <div className="container mx-auto mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            Reserve Your Animal{" "}
            <span className="text-orange-500 italic">
              Before It&apos;s Gone
            </span>
          </h2>
          <p className="text-slate-500 mt-1">
            Limited stock available. Book now and celebrate Eid with confidence.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow border bg-white">
          <div className="relative lg:w-[45%] min-h-72 lg:min-h-140">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              className="object-cover"
            />

            <div className="absolute top-4 left-4">
              <Chip
                size="sm"
                className="bg-white/90 text-gray-800 font-semibold uppercase"
              >
                {animal.category}
              </Chip>
            </div>

            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white ">
              <MapPin size={14} />
              <span>{animal.location}</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col p-7 lg:p-9">
            <h1 className="text-2xl lg:text-3xl font-bold text-orange-500 italic mb-1">
              {animal.name}
            </h1>
            <p className="text-2xl font-bold text-emerald-600 mb-6">
              BDT {animal.price.toLocaleString()}tk
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {data.map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-[#F7F1E1] rounded-2xl px-4 py-3 shadow-inner"
                >
                  <p className="text-xs font-semibold uppercase text-gray-400 mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-gray-800">{value}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold uppercase text-gray-400 mb-2">
                Description
              </p>
              <p className="text-sm text-gray-600">{animal.description}</p>
            </div>

            <div className="border-t border-gray-100 pt-5 mt-auto">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;
