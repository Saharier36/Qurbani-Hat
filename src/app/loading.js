import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-2 justify-center">
      <Spinner size="lg" color="success" />
      <p className="text-md text-muted">Loading...</p>
    </div>
  );
}
