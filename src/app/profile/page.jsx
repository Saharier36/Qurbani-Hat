"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Chip, Separator, Spinner } from "@heroui/react";
import { HiOutlineIdentification } from "react-icons/hi";
import { BiCalendar, BiEnvelope } from "react-icons/bi";
import { MdOutlineManageAccounts } from "react-icons/md";
import Link from "next/link";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  if (userData.isPending) {
    return (
      <div className="min-h-screen flex flex-col items-center gap-2 justify-center">
        <Spinner size="lg" color="success" />
        <p className="text-md text-muted">User Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <div className="flex flex-col items-center gap-4 py-8 px-6">
          <Avatar className="w-20 h-20 text-2xl">
            <Avatar.Image
              src={user?.image}
              alt={user.name}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback>
              {user.name?.charAt(0).toUpperCase()}
            </Avatar.Fallback>
          </Avatar>

          <div className="text-center">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <Chip
              size="sm"
              variant="soft"
              className="mt-1 bg-orange-100 text-orange-600"
            >
              User
            </Chip>
          </div>

          <Separator className="w-full" />

          <div className="w-full space-y-3">
            <div className="flex items-center gap-3">
              <BiEnvelope size={15} className="text-gray-500" />

              <div>
                <p className="text-xs text-gray-500 uppercase">Email</p>
                <p className="text-sm">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <HiOutlineIdentification size={15} className="text-gray-500" />

              <div>
                <p className="text-xs text-gray-500 uppercase">User ID</p>
                <p className="text-sm">{user.id}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <BiCalendar size={15} className="text-gray-500" />

              <div>
                <p className="text-xs text-gray-500 uppercase">Joined</p>
                <p className="text-sm">
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </p>
              </div>
            </div>
          </div>

          <Separator className="w-full" />

          <Link href="/" className="w-full">
            <Button
              fullWidth
              className="bg-emerald-700 hover:bg-emerald-800 rounded-xl"
            >
              <MdOutlineManageAccounts size={14} />
              Update your Profile
            </Button>
          </Link>
        </div>
      </Card>
    </main>
  );
};

export default ProfilePage;
