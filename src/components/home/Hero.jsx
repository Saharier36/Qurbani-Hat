import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { PiCowBold } from "react-icons/pi";

const Hero = () => {
  return (
    <main>
      <section className="relative h-140 w-full overflow-hidden">
        <div className="absolute inset-0 after:absolute after:inset-0 after:bg-black/40 after:z-10">
          <Image
            src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=2070&auto=format&fit=crop"
            alt="QurbaniHat Banner"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Find Your Perfect <br />
              <span className="text-orange-500 italic">Qurbani</span> Sacrifice.
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              We provide healthy, organic-fed, and premium quality animals for
              your sacred sacrifice. Every booking ensures a hassle-free
              experience.
            </p>

            <div className="flex gap-4">
              <Link href="/animals">
                <Button
                  className="bg-orange-600 text-white font-bold px-8 h-12 text-lg hover:bg-orange-700"
                  radius="sm"
                >
                  Browse Animals
                  <PiCowBold />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
