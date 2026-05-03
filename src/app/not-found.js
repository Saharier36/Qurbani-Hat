import Link from "next/link";
import { Button } from "@heroui/react";
import { TbError404 } from "react-icons/tb";
import { HiArrowLeft } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
      <TbError404 className="text-red-400" size={150} />
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Page not found</h2>
        <p className="text-slate-500 text-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link href="/">
        <Button className="bg-orange-600 hover:bg-orange-700">
          <HiArrowLeft />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
