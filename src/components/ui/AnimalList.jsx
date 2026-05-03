"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Card,
  Chip,
  ListBox,
  ListBoxItem,
  Select,
} from "@heroui/react";

const AnimalList = ({ animals }) => {
  const [sortOrder, setSortOrder] = useState("default");

  const sortAnimals = [...animals].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <div className="px-6 mb-6">
        <Select
          selectedKey={sortOrder}
          onSelectionChange={(key) => setSortOrder(key)}
          className="w-44"
          placeholder="Sort by price"
        >
          <Select.Trigger className="bg-orange-600 font-medium rounded-full hover:bg-orange-600">
            <Select.Value className="text-white" />
            <Select.Indicator className="text-white" />
          </Select.Trigger>
          <Select.Popover className="rounded-xl shadow-lg">
            <ListBox>
              <ListBoxItem
                id="default"
                className="text-gray-800 font-medium text-sm px-4 py-2 cursor-pointer hover:bg-orange-100 hover:text-orange-600 rounded-lg"
              >
                Sort by price
              </ListBoxItem>
              <ListBoxItem
                id="asc"
                className="text-gray-800 font-medium text-sm px-4 py-2 cursor-pointer hover:bg-orange-100 hover:text-orange-600 rounded-lg"
              >
                Low → High
              </ListBoxItem>
              <ListBoxItem
                id="desc"
                className="text-gray-800 font-medium text-sm px-4 py-2 cursor-pointer hover:bg-orange-100 hover:text-orange-600 rounded-lg"
              >
                High → Low
              </ListBoxItem>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortAnimals.map((animal) => (
          <Card key={animal.id} shadow="sm">
            <div className="relative h-56 w-full">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute top-2 left-2">
                <Chip
                  size="sm"
                  variant="flat"
                  className="bg-white/90 text-slate-800 text-xs"
                >
                  {animal.type}
                </Chip>
              </div>
            </div>

            <div className="p-3">
              <h2 className="font-bold text-slate-800 text-lg">
                {animal.name}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {animal.breed} · {animal.location}
              </p>

              <div className="flex items-center justify-between mt-2">
                <span className="text-emerald-600 font-bold text-sm">
                  {animal.price.toLocaleString()} tk
                </span>
                <span className="text-xs text-slate-500">
                  {animal.weight} kg
                </span>
              </div>

              <div className="mt-3">
                <Link href={`/animals/${animal.id}`} className="w-full">
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    size="sm"
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

export default AnimalList;
